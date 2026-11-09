import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* SETS UP MY EXPERIENCE PAGE, ASSIGNS A CARD TO EACH SECTION OF MY EXPERIENCE SO I COULD SPLIT THINGS UP NICELY FOR THE VIEWER */
/* ALL I REALLY WANTED IN THIS SECTION WAS TO DIVIDE UP MY EXPERIENCE BY CATEGORY AND GIVE EACH ROLE ITS OWN CARD */

function Experience() {
  return (
    <div className="page">
      <Navbar />

      <main className="experience-page"> {/* INTIALIZES THE PAGE */}

        <h1 className="experience-title">Experience</h1> 

        <section className="experience-section"> {/* HEADER */}
          <h2>Education</h2>

          <div className="experience-card">  {/*CREATES THE EXPERIENCE CARD */}
            <h3>University of Limerick</h3>

            <p className="experience-subtitle"> {/* EXPERIENCE DESCRIPTION */}
              Masters Degree in User Interaction and Experience Design
            </p>

            <p>
              Expected Graduation: 2028
            </p>

            <p>
              <strong>Relevant Coursework:</strong> Virtual and Augmented Reality Design,
              Physical Computing, Interactive Media, Foundations of Interaction and Experience Design
            </p>

          </div>

          <div className="experience-card">
            <h3>Mount Holyoke College</h3>

            <p className="experience-subtitle">
              Bachelor of Arts – Computer Science
            </p>

            <p>
              Graduation: 2025
            </p>

            <p>
              <strong>Relevant Coursework:</strong> Discrete Mathematics,
              Robotic Planning Algorithms, Operating Systems, Data Structures
            </p>
          </div>
        
        </section>

        <section className="experience-section">
          <h2>Work Experience</h2>

          <div className="experience-card">
            <h3>Brown & Brown – Technical Assistant</h3>

            <p className="experience-date">
              September 2025 – July 2026
            </p>

            <ul>
              <li>
                Worked with insurance brokers to review and send out quotations. 
              </li>

              <li>
                Worked with the cancellations team to make sure company quotas were met at month end.
              </li>

              <li>
                Assisted in tranferring major operating systems into AI assisted systems in order to increase workflow.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>DataAnnotation – Data Annotator </h3>

            <p className="experience-date">
              May 2024 – August 2026
            </p>

            <ul>
              <li>
               Trained machine learning algorithms utilized by large language models through more than 20 distinct projects.
              </li>

              <li>
                Maintained high-quality data analysis while ensuring efficiency in completing tasks.
              </li>

              <li>
                Adapted to the differing descriptions of each project, paying particular attention to key guidelines.
              </li>
            </ul>
          </div>
        </section>

        <section className="experience-section">
          <h2>Leadership & Involvement</h2>

          <div className="experience-card">
            <h3>Mount Holyoke College – Varsity Track Team Captain</h3>

            <p className="experience-date">
              September 2024 – May 2025
            </p>

            <ul>
              <li>
               Led team of 30+ athletes for 2 years, coordinating meets and mentoring new members.
              </li>

              <li>
                Represented team on NCAA Student Athletic Advisory Committee.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Mount Holyoke College CS Department – CS Big Mentor</h3>

            <p className="experience-date">
              January 2024 – May 2024
            </p>

            <ul>
              <li>
                Mentored two first-year students exploring the CS major.
              </li>

              <li>
                Shared resources, offered advice, and guided course selection.
              </li>
            </ul>
          </div>
        </section>

        <div className="resume-download">
          <a
            href="/Abigail Elliott Resume copy.pdf"
            download
            className="resume-button"
          >
            Download Full Resume (PDF)
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Experience;