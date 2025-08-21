import Projects from '../content-components/Projects.jsx';
import Experience from '../content-components/Experience.jsx';
import About from '../content-components/About.jsx';
import Contact from '../content-components/Contact.jsx';

const Content = ({ activeSection }) => {
  return (
    <div className="content-container">
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
    </div>
  );
};

export default Content;