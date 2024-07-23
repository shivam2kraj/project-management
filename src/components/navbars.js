import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbars = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Project Management
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Projects</Button>
          <Button color="inherit" component={Link} to="/editor">Editor</Button>
        </Box>
        <IconButton edge="end" color="inherit" onClick={handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbars;


