import { Link } from 'react-router-dom'; /* ALLOWS ME TO LINK MY DIFFERENT PAGES TO THE HEADER */

function Navbar() {
  /* SETS UP MY NAME ON THE LEFT HAND SIDE OF MY NAV BAR */
  /* EVERYTHING UNDER NAV LINKS EACH SECTION IN THE NAV BAR TO ITS CORRESPONDING PAGE USING THE REACT ROUTING FEAUTRES */
  return (
    <header className="home-header">
      <div className="brand">
        <h1>Abigail Elliott</h1>
        <p>UX Designer & Developer</p>
      </div>
 
      <nav className="home-nav">  
        <Link to="/">Home</Link> 
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contactme">Contact Me</Link>
      </nav>
    </header>
  );
}

export default Navbar;