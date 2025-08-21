const Navigation = ({ setActiveSection }) => {
  return (
    <div className="nav-bar">
      <div className="header-container select-none">
        <h1>Alex Zaharia</h1>
        <p className="text-description select-none">Creative Problem-Solver</p>
      </div>
      <nav className="nav-links">
        <button onClick={() => setActiveSection('home')}>HOME</button>
        <button onClick={() => setActiveSection('projects')}>PROJECTS</button>
        <button onClick={() => setActiveSection('experience')}>EXPERIENCE</button>
        <button onClick={() => setActiveSection('about')}>ABOUT</button>
        <button onClick={() => setActiveSection('contact')}>CONTACT</button>
      </nav>
    </div>
  );
};

export default Navigation;
