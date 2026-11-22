import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headshot from '../assets/about/headshot.jpg';
import resumePdf from '../assets/about/abigail-elliott-resume.pdf';

/* SETS UP MY ABOUT ME PAGE: A SHORT INTRODUCTION WITH MY HEADSHOT, MY SKILLS, AND THEN MY EDUCATION AND EXPERIENCE */
/* EACH ROLE, DEGREE AND PROJECT GETS ITS OWN CARD SO THE VIEWER CAN SCAN THE PAGE EASILY */

/* SKILL GROUPS (EACH ONE BECOMES A CARD OF LITTLE TAGS) */
const skillGroups = [
  {
    title: 'Design',
    skills: [
      'UX/UI design',
      'Interaction design',
      'Low-fidelity prototyping',
      'User surveys',
      'Wizard of Oz testing',
      'Heuristic evaluation',
    ],
  },
  {
    title: 'Development',
    skills: ['Python', 'Java', 'JavaFX', 'C++', 'C', 'SQL', 'HTML', 'React', 'TypeScript', 'GitHub', 'Unity'],
  },
  {
    title: 'Physical Technology',
    skills: [
      'Woodworking',
      'Lathe turning',
      'Arduino',
      'Circuit Playground Express',
      'Soldering and wiring',
      '3D printing and laser cutting',
      'CAD (Fusion)',
      'PC building',
      'Power tools',
    ],
  },
  {
    title: 'Working With Others',
    skills: ['Communication', 'Collaboration', 'Flexibility', 'Conflict resolution', 'Reporting', 'Analytics'],
  },
];

function AboutMe() {
  return (
    <div className="page">
      <Navbar />

      <main className="experience-page"> {/* INITIALIZES THE PAGE */}

        <h1 className="experience-title">About Me</h1>

        {/* INTRODUCTION: HEADSHOT ON THE LEFT, DESCRIPTION ON THE RIGHT */}
        <section className="about-intro">
          <img className="about-photo" src={headshot} alt="Abigail Elliott smiling, with autumn trees behind her" />

          <div className="about-text">
            <h2>Hi, I'm Abby</h2>

            <p>
              I'm a Master's student at the University of Limerick studying User Interaction and
              Experience Design (UX/UI), with a background in computer science from Mount Holyoke
              College. I'm interested in how people interact with the things we build, and in
              designing experiences that are clear and enjoyable to use.
            </p>

            <p>
              I am most passionate about woodworking and physical technology. I find building something I
              can hold to be incredibly rewarding, whether it's a lathe-turned stool, an end-grain cutting board or an
              interactive game with its own hand-built box. Projects like these let me combine
              design thinking with hands-on skills such as wiring, soldering, 3D printing and
              power tools.
            </p>

            <p>
              I'm also very experienced in coding. I've worked in Python, Java, C++, C, SQL and
              HTML. On top of that I've built games, robots and interactive hardware, as well as this website.
              I enjoy the place where software meets the physical world, and I bring that technical
              understanding to my design work.
            </p>

            <p>
              Outside my studies, I captained the Mount Holyoke varsity track team and mentored
              first-year computer science students, which taught me a lot about leadership,
              communication and working with others.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="experience-section">
          <h2>Skills</h2>

          <div className="about-skills">
            {skillGroups.map((group) => (
              <div className="experience-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="skill-tags">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section"> {/* HEADER */}
          <h2>Education</h2>

          <div className="experience-card">  {/* CREATES THE EXPERIENCE CARD */}
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
              Bachelor of Arts – Computer Science, Minor in Philosophy
            </p>

            <p>
              Graduation: 2025
            </p>

            <p>
              <strong>Relevant Coursework:</strong> Discrete Mathematics,
              Robotic Planning Algorithms, Operating Systems, Data Structures, Algorithms,
              Software Design and Development, Ethics in Artificial Intelligence,
              Technology for the Visually Impaired and Blind
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
                Assisted in transferring major operating systems into AI assisted systems in order to increase workflow.
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
                Analyzed conversations between users and the chatbot to improve and optimize chatbot performance.
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

        {/* TECHNICAL PROJECTS FROM MY COMPUTER SCIENCE DEGREE */}
        <section className="experience-section">
          <h2>Technical Projects</h2>

          <div className="experience-card">
            <h3>Engineering Robotics Systems – Group Project</h3>

            <p className="experience-date">
              May 2023
            </p>

            <ul>
              <li>
                Built a robot from scratch, using a ROMI control board to implement its functionality.
              </li>

              <li>
                Designed 3D-printed parts to attach to the robot using Fusion, a CAD program.
              </li>

              <li>
                Programmed the robot in C++ to drive through an arena, put out a fire (a small candle),
                rescue people (wooden pegs) from the fire and take them to the hospital.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Software Design and Development – Group Project</h3>

            <p className="experience-date">
              May 2023
            </p>

            <ul>
              <li>
                Developed a video game with similar functionality to Flappy Bird, a mobile arcade game, using JavaFX.
              </li>

              <li>
                Used GitHub to merge team members' branches.
              </li>

              <li>
                Implemented sound and visual effects, as well as features such as invincibility, extra lives and difficulty modes.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Data Structures – Library Application</h3>

            <p className="experience-date">
              October 2022
            </p>

            <ul>
              <li>
                Developed a Java application that lets users check library items in and out.
              </li>

              <li>
                Created an automatic database of lending items, so university library users can check out books, CDs, DVDs and academic journals.
              </li>

              <li>
                Programmed the database to tell the items apart: books have an author, CDs have an artist, DVDs have performers and journals have none of these.
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
            href={resumePdf}
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

export default AboutMe;
