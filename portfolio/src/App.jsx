import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

import Loading from "./components/Loading.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Navigation from "./components/Navigation.jsx";
import Content from "./components/Content.jsx";
import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSceneLoad = () => {
    setShowContent(true);
  };

  if (isLoading) return <Loading />;

  return (
    <div className={`app ${showContent ? "opacity-100" : "opacity-0"}`}>
      {/* Theme Toggle */}
      <section id="header">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </section>

      {/* Main Container */}
      <section id="main">
        <Navigation setActiveSection={setActiveSection} />\
        <Content activeSection={activeSection} />
        <Background theme={theme} handleSceneLoad={handleSceneLoad} />
      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
