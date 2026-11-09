import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
/* REACT ICONS FOR LINKEDIN, EMAIL AND GITHUB */
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

/* SETS UP THE CONTACT ME PAGE */
/* FIRST ESTABLISHES THE CONTACT ME HEADEER */
/* THE WE SET UP THE GET IN TOUCH BOX WHICH CONTAINS THE CONTACT LINKS AND LOGOS */

function ContactMe() {
  return (
    <div className="page">
      <Navbar />
      <main className="contact-page"> {/* HEADER */}
        <h1>Contact Me</h1>

        <div className="contact-card"> {/* CREATE GET IN TOUCH BOX  */}
          <h2>Get in Touch</h2>

          <p className="contact-message"> {/* CONTACT MESSAGE */}
            Reach me with any inquiries, questions, or opportunities!
          </p>

          <div className="contact-links"> {/* SETS UP THE LINKS */}

            <a
              href="mailto:26185032@studentmail.ul.ie" /* LINK TO EMAIL */
              className="contact-link"
            >
                
              <FaEnvelope /> {/* EMAIL LOGO */}
              <span>26185032@studentmail.ul.ie</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abby-elliott-425474254" /* LINK TO LINKEDIN */
              target="_blank"
              rel="noopener noreferrer" /* WEBSITE PROJECTIONS */
              className="contact-link"
            >
              <FaLinkedin />  {/* LINKEDIN LOGO */}
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/ellio24a" /* LINK TO GITHUB */
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub /> {/* GIT LOGO */}
              <span>GitHub</span>
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactMe;