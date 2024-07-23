import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/projects';
import ProjectFiles from './pages/projectFiles';
import EditorPage from './pages/editorPages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectFiles />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
