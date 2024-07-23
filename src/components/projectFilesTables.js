import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const files = [
  { id: 1, name: 'File A', status: 'Completed', priority: 'High' },
  { id: 2, name: 'File B', status: 'In Progress', priority: 'Medium' },
  // Add more files as needed
];

const ProjectFilesTable = () => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.id}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.status}</TableCell>
              <TableCell>{file.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectFilesTable;
