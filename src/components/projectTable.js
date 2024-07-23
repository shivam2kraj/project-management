import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, name: 'Project A', role: 'Developer', creationDate: '2024-01-01', status: 'Active' },
  { id: 2, name: 'Project B', role: 'Designer', creationDate: '2024-02-15', status: 'Inactive' },
  // Add more projects as needed
];

const ProjectsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Role</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Creation Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.role}</TableCell>
              <TableCell>{project.creationDate}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                <Button component={Link} to={`/project/${project.id}`} variant="contained">
                  View Files
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;

