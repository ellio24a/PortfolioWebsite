import { Link, useParams } from 'react-router-dom'; {/* LINKS LETS YOU CREATE LLINKS BETWEEN CURRENT PAGES, USEPARAMS ALLOWS FOR YOU TO RETRIEVE INFORMATION FROM THE CURRENT URL */}
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/projects'; {/* IMPORT ALL PROJECT INFORMATION FROM THE PROJECT PAGE */}

function ProjectDetail() { /* CREATES THE FUNCTION THAT DETERMINES WHAT HAPPENS WHEN THE USER VISITS THE PROJECT PAGES */
  const { projectId } = useParams(); {/* EXRACTS THE PROJECT ID FROM THE URL, BASICALLY LETS YOU ACCESS THE PROJECTS */}

  const project = projects.find( /* SEARCHES YOUR PROJECT FOR AN ARRAY WHOS ID MATCHES THE ID FROM THE URL, MAKES IT SO YOU DON'T NEED A SPEPARATE COMPONENT FOR EACH PROJECT*/
    (project) => project.id === projectId 
  );

  /* HANDLES THE CASE IN WHICH A PROJECT DOESNT EXIST, DISPLAYS PROJECT NOT FOUND INSTEAD OF CRASHING THE WEBSITE */
  if (!project) { 
    return (
      <div className="page">
        <Navbar />

        <main className="project-detail-page"> 
          <h1>Project Not Found</h1>

          <Link to="/projects"> {/* LINKS BACK TO PROJECTS BUTTON TO PROJECT PAGE FOR EASY NAVIGATION */}
            ← Back to Projects
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />

      <main className="project-detail-page">
        <Link
          to="/projects" /* TELLS ROUTER WHERE TO GO */
          className="back-to-projects"  /* LETS ME STYLE LINK INS CSS */
        >
          ← Back to Projects
        </Link>

        <h1>{project.title}</h1>

        <p className="project-detail-intro"> {/* RETRIEVE THE SELECTED PROJECTS DATA */}
          {project.shortDescription}
        </p>

        <section className="project-detail-section"> {/* FOLLOWS THE SAME PATTERN AS ABOVE BUT CONTENT CHANGES BASED ON THE PROJECT ID SELECTED */}
          <h2>Project Overview</h2> 
          <p>{project.overview}</p>
        </section>

        <section className="project-detail-section">
          <h2>The Challenge</h2>
          <p>{project.challenge}</p>
        </section>

        <section className="project-detail-section">
          <h2>My Process</h2>
          <p>{project.process}</p>
        </section>

        <section className="project-detail-section">
          <h2>Technologies & Skills</h2>

          <div className="technology-list"> {/* STORES AN ARRAY OF THE TECHNOLOGIES & SKILLS USED IN THE PROJECT */}
            {project.technologies.map((technology) => (
              <span key={technology}> {/* ESSENTIALLY, GO THROUGH EACH TECHNOLOGY AND CREATE AN ELEMENT FOR IT */}
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="project-detail-section">
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail; /* MAKES THIS COMPONENT AVAILABLE TO OTHER FILES` */