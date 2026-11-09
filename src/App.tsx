/* SETS UP THE ROUTING PATHS FOR EACH PAGE IN THE WEBSITE */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience';
import ContactMe from './pages/ContactMe';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetail />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/contactme"
          element={<ContactMe />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;