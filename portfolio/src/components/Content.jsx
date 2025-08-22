import Projects from '../content-components/Projects.jsx';
import Experience from '../content-components/Experience.jsx';
import About from '../content-components/About.jsx';
import Contact from '../content-components/Contact.jsx';

const Content = ({ activeSection }) => {
  return (
    <section id="content">
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
    </section>
  );
};

export default Content;