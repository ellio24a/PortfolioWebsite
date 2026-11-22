/* SETS UP THE ROUTING PATHS FOR EACH PAGE IN THE WEBSITE */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}> {/* SO LINKS WORK UNDER /PortfolioWebsite/ ON GITHUB PAGES */}
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
          path="/about"
          element={<AboutMe />}
        />

        {/* THE OLD /experience LINK NOW GOES TO THE ABOUT ME PAGE */}
        <Route
          path="/experience"
          element={<Navigate to="/about" replace />}
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