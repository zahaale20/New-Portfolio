import { useState } from "react";

const Navigation = ({ setActiveSection }) => {
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
    setActiveSection(section);
  };

  return (
    <section id="navbar">
      <div className="header-container select-none">
        <h1>Alex Zaharia</h1>
        <p className="select-none">Creative Problem-Solver</p>
      </div>
      <nav>
        <button className={active === "home" ? "active" : ""} onClick={() => handleClick("home")}>HOME</button>
        <button className={active === "projects" ? "active" : ""} onClick={() => handleClick("projects")}>PROJECTS</button>
        <button className={active === "experience" ? "active" : ""} onClick={() => handleClick("experience")}>EXPERIENCE</button>
        <button className={active === "about" ? "active" : ""} onClick={() => handleClick("about")}>ABOUT</button>
        <button className={active === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>CONTACT</button>
      </nav>
    </section>
  );
};

export default Navigation;
