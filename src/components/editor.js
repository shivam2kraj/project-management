
import React, { useState, useRef } from 'react';
import { Button, Box, Grid } from '@mui/material';

const Editor = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [currentBox, setCurrentBox] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setVideo(null); // Clear video if an image is uploaded
  };

  const handleVideoUpload = (event) => {
    setVideo(URL.createObjectURL(event.target.files[0]));
    setImage(null); // Clear image if a video is uploaded
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleCanvasMouseDown = (event) => {
    if (!image) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCurrentBox({ x1: x, y1: y, x2: x, y2: y });
    setDrawing(true);
  };

  const handleCanvasMouseMove = (event) => {
    if (!drawing || !currentBox) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCurrentBox({ ...currentBox, x2: x, y2: y });
  };

  const handleCanvasMouseUp = () => {
    if (!drawing) return;

    setBoundingBoxes([...boundingBoxes, currentBox]);
    setDrawing(false);
    setCurrentBox(null);
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-image"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-image">
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
        </Grid>
        <Grid item>
          <input
            accept="video/*"
            style={{ display: 'none' }}
            id="upload-video"
            type="file"
            onChange={handleVideoUpload}
          />
          <label htmlFor="upload-video">
            <Button variant="contained" component="span">
              Upload Video
            </Button>
          </label>
        </Grid>
      </Grid>

      {image && (
        <Box mt={2} position="relative" textAlign="center">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            style={{ border: '1px solid black' }}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
          />
          <img
            src={image}
            alt="Uploaded"
            style={{ display: 'none' }}
            onLoad={(e) => {
              const ctx = canvasRef.current.getContext('2d');
              ctx.drawImage(e.target, 0, 0, 800, 600);
            }}
          />
          {boundingBoxes.map((box, index) => (
            <Box
              key={index}
              position="absolute"
              border="2px solid red"
              left={Math.min(box.x1, box.x2)}
              top={Math.min(box.y1, box.y2)}
              width={Math.abs(box.x2 - box.x1)}
              height={Math.abs(box.y2 - box.y1)}
              pointerEvents="none"
            />
          ))}
        </Box>
      )}

      {video && (
        <Box mt={2} textAlign="center">
          <video ref={videoRef} controls style={{ maxWidth: '100%' }} src={video} />
          <Grid container spacing={2} justifyContent="center" mt={2}>
            <Grid item>
              <Button variant="contained" onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  videoRef.current.currentTime -= 1 / 30;
                }}
              >
                Previous Frame
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  videoRef.current.currentTime += 1 / 30;
                }}
              >
                Next Frame
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Editor;
