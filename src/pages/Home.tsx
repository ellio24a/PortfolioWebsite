import { Link } from 'react-router-dom'; {/* REACT ROUTING */}
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <main className="home-panels"> {/* ESTBLISHES THE SPLIT HOMEPAGE */}

        <section className="home-panel projects-panel"> {/* ESTABLISHES AND NAMES THE PROJECT AND EXPERIENCE SECTIONS */}
          <div className="panel-content">
            <h2>Projects</h2>

            <Link to="/projects" className="learn-more"> {/* LINKS TO PROJECT PAGE */}
              Learn More
            </Link>
          </div>
        </section>

        <section className="home-panel experience-panel"> {/* ESTABLISHES AND NAMES THE EXPERIENCE SECTION */}
          <div className="panel-content">
            <h2>Experience</h2>

            <Link to="/experience" className="learn-more"> {/* LINKS TO EXPERIENCE PAGE */}
              Learn More 
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default Home;