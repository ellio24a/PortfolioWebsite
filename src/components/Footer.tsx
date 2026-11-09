import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} Abigail Elliott. All Rights Reserved. 
      </p>

      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/abby-elliott-425474254" /* LINKS THE LOGO TO MY LINKEDIN PAGE */
          target="_blank" /* OPENS LINK IN NEW TAB  */
          rel="noopener noreferrer" /* NEW PAGE OPENED DOES NOT HAVE ACCESS TO MY PORTFOLIO PAGE, ESSENTIALLY JUST A BASIC SECURITY PROJECTION */
          aria-label="LinkedIn" /* ACCESSIBILITY FEATURE, ALLOWS A SCREEN READER TO READ THE LINKEDIN LOGO */
        >
          <FaLinkedin /> 
        </a>

        <a
          href="mailto:26185032@studentmail.ul.ie"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/ellio24a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;