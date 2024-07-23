## Project Overview
This React application is designed to manage projects and their associated files, as well as provide an editor for image and video manipulation. The application uses Material-UI (MUI) for its UI components and styling.

## Installation:
1) npx create-react-app project-management
2) npm install @mui/material
3) npm install @emotion/react
4) npm install react-router-dom
5) npm install @mui/icons-material
6) npm install @emotion/styled  
# Purpose: 
Serves as the entry point of the application, setting up the routing and theming.
# Routing: 
Uses react-router-dom to define routes for three main pages: Projects, Project Files, and Editor.

## Navbar Component

# Purpose: 
Provides navigation links and user account options.
Features:  
Includes navigation buttons for the Projects and Editor pages, which are always visible. It also has an account icon that opens a menu with profile and logout options.

## Projects Page

# Purpose: 
Displays a table of projects with columns for Name, Role, Creation Date, Status, and Actions.
# Components: 
Contains a Navbar and a ProjectsTable component.

## Project Files Page

# Purpose: 
Displays a table of files associated with a selected project, with columns for Name, Status, and Priority.
# Components: 
Contains a Navbar and a ProjectFilesTable component.

## Editor Page

# Purpose: 
Provides a UI for uploading and editing images and videos. Users can draw bounding boxes on images and perform frame-by-frame segmentation on videos.
# Features: 
Includes buttons for uploading images and videos, and controls for playing and pausing video playback, as well as navigating frames.
# Components: 
Contains a Navbar and an Editor component.

## Key Features

# Navigation: 
The Navbar provides easy navigation between the main pages and includes an account icon for user options.
# Project Management: 
The Projects and Project Files pages allow users to view and manage projects and their associated files.
# Image and Video Editing: 
The Editor page provides tools for users to upload, view, and manipulate images and videos.

## Theme and Styling

# MUI Theming: 
The application uses MUI's ThemeProvider to apply a consistent theme across all components. This makes it easy to manage and customize the look and feel of the application.