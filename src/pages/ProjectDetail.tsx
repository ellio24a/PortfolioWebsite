/* SHOWS ONE PROJECT'S PAGE, USING THE ID IN THE URL TO FIND IT IN PROJECTS.TS */

import { Fragment } from 'react';
import type { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import type { ProjectSection } from '../data/projects';

// SMOOTH-SCROLLS TO A SECTION WHEN A "CONTENTS" LINK IS CLICKED
const scrollTo = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// DRAWS ONE SECTION CARD (USED FOR BOTH THE GROUP REPORT AND THE REFLECTION)
function Section({ section, index }: { section: ProjectSection; index: number }) {
  return (
    <section
      id={section.id}
      className={[
        'project-detail-section',
        section.image ? 'has-image' : '',
        section.image && index % 2 === 1 ? 'image-left' : '',
      ].join(' ')}
    >
      {section.image && (
        <img className="section-image" src={section.image.src} alt={section.image.alt} />
      )}

      <div className="section-text">
        <h2>{section.heading}</h2>

        {section.quote && <blockquote className="project-quote">{section.quote}</blockquote>}

        {section.paragraphs?.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        {/* BIG NUMBERS */}
        {section.stats && (
          <div className="section-stats">
            {section.stats.map((stat) => (
              <div className="section-stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* SIMPLE BULLET LIST */}
        {section.bullets && (
          <ul className="section-bullets">
            {section.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {/* NUMBERED STEP-BY-STEP PICTURES */}
        {section.steps && (
          <ol className="section-steps">
            {section.steps.map((step) => (
              <li key={step.src}>
                <img src={step.src} alt={step.caption} />
                <span>{step.caption}</span>
              </li>
            ))}
          </ol>
        )}

        {/* CARDS WITH A TITLE AND BULLET POINTS */}
        {section.items && (
          <div className="section-items">
            {section.items.map((item) => (
              <div className={item.images ? 'section-item has-pics' : 'section-item'} key={item.title}>
                {item.images && (
                  <div className="section-item-pics">
                    {item.images.map((img) => (
                      <img key={img.src} src={img.src} alt={img.alt} />
                    ))}
                  </div>
                )}
                <div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PHOTOS WITH CAPTIONS */}
        {section.gallery && (
          <div className="section-gallery">
            {section.gallery.map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.caption} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {section.references && (
          <ol className="project-references">
            {section.references.map((ref) => (
              <li key={ref.url}>
                {ref.text}{' '}
                <a href={ref.url} target="_blank" rel="noreferrer">Link</a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { projectId } = useParams(); // e.g. "project-one" FROM /projects/project-one
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="page">
        <Navbar />
        <main className="project-detail-page">
          <Link to="/projects" className="back-to-projects">← Back to Projects</Link>
          <h1>Project not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const technologies = project.technologies.filter(Boolean);

  // PERSONAL REFLECTION (BANNER + ITS OWN SECTIONS)
  const reflection = project.reflection;
  const reflectionAfter = reflection?.placeAfter;
  const reflectionBlock = reflection && (
    <div className="reflection">
      <div className="reflection-banner" id="reflection">
        <h2>{reflection.title}</h2>
        {reflection.subtitle && <p>{reflection.subtitle}</p>}
      </div>

      {reflection.sections.map((section, index) => (
        <Section section={section} index={index} key={section.id} />
      ))}

      <div className="reflection-end">End of my reflection</div>
    </div>
  );

  return (
    <div className="page">
      <Navbar />

      <main className="project-detail-page">
        <Link to="/projects" className="back-to-projects">← Back to Projects</Link>

        {/* TITLE + TAGLINE */}
        <header className="project-hero">
          <h1>{project.title}</h1>
          {project.tagline && <p className="project-detail-intro">{project.tagline}</p>}
        </header>

        {/* VIDEO IF THERE IS ONE, OTHERWISE THE PROJECT IMAGE */}
        {project.video ? (
          <video
            className={project.videoSquare ? 'project-media is-square' : 'project-media'}
            src={project.video}
            poster={project.videoPoster}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          project.image && (
            <img
              className={project.imagePortrait ? 'project-media is-portrait' : 'project-media'}
              src={project.image}
              alt={project.title}
            />
          )
        )}

        {/* QUICK FACTS STRIP */}
        {project.facts && (
          <dl className="project-facts">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {/* LINK TO THE FULL REPORT */}
        {project.report && (
          <a className="report-button" href={project.report.url} target="_blank" rel="noreferrer">
            {project.report.label} ↗
          </a>
        )}

        {/* CONTENTS LINKS (ONLY WHEN THERE ARE SEVERAL SECTIONS) */}
        {project.sections.length > 2 && (
          <nav className="project-contents" aria-label="Contents">
            <span>Contents</span>
            {project.sections.map((section) => (
              <Fragment key={section.id}>
                <a href={`#${section.id}`} onClick={scrollTo(section.id)}>
                  {section.heading}
                </a>
                {reflection && reflectionAfter === section.id && (
                  <a className="contents-reflection" href="#reflection" onClick={scrollTo('reflection')}>
                    {reflection.title}
                  </a>
                )}
              </Fragment>
            ))}
            {reflection && !reflectionAfter && (
              <a className="contents-reflection" href="#reflection" onClick={scrollTo('reflection')}>
                {reflection.title}
              </a>
            )}
          </nav>
        )}

        {/* GROUP REPORT — PICTURES ALTERNATE LEFT AND RIGHT.
            THE REFLECTION IS SLOTTED IN AFTER THE SECTION NAMED IN "placeAfter" */}
        {project.sections.map((section, index) => (
          <Fragment key={section.id}>
            <Section section={section} index={index} />
            {reflectionAfter === section.id && reflectionBlock}
          </Fragment>
        ))}

        {/* NO "placeAfter"? THEN THE REFLECTION GOES AT THE END */}
        {!reflectionAfter && reflectionBlock}

        {/* TECHNOLOGIES (HIDDEN IF THE LIST IS EMPTY) */}
        {technologies.length > 0 && (
          <section className="project-detail-section">
            <h2>Tools &amp; Skills</h2>
            <div className="technology-list">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        )}
        {/* REPORT LINK AGAIN AT THE END */}
        {project.report && (
          <a className="report-button" href={project.report.url} target="_blank" rel="noreferrer">
            {project.report.label} ↗
          </a>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
