/* SETS UP THE PROJECT PAGE STRUCTURE AND CONTENT */
/* SETS UP THE ROUTING FOR THE PROJECT TILES */

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

//PHYSICALLY SETS UP THE PROJECT PAGE STRUCTURE

function Projects() {
  return (
    <div className="page">
      <Navbar />

      <main className="projects-page">
        <h1>Projects</h1>

        <p className="projects-intro">  
          Explore some of my projects.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (  //USES .MAP TO GO THROUGH ALL THE PROJECT DATA IN PROJECT.TS, IT PROCESS EACH PROJECT INDIVIDUALLY AND CREATES A TILES FOR IT
            <Link
              to={`/projects/${project.id}`} //ROUTING FROM PROJECT DETAIL, EACH PROJECT TILE IS ACTUALLY A LINK SO THIS CONSTRUCTS A URL USING THE PROJECT ID
                                             //THIS URL WILL NOW MATCH THE PROJECT DETAIL ROUTE WHICH WILL ALLOW US TO DISPLAY WHAT WAS SET UP IN PROJECT.TS
              className="project-tile"
              key={project.id} 
            >
              <h2 className="project-title">
                {project.title}
              </h2>

              <div className="project-overlay">
                <h2>{project.title}</h2>

                <p>
                  {project.shortDescription}
                </p>

                <span>View Project →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;