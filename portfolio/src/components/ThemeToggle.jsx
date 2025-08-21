const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div className="theme-container">
      <button onClick={() => setTheme("light")} className="mr-4">
        <div className={`toggle-box ${theme === "light" ? "bg-black border-black" : "bg-white border-white"}`} />
        <p className="toggle-box-text">LIGHT</p>
      </button>
      <button onClick={() => setTheme("dark")}>
        <div className={`toggle-box ${theme === "dark" ? "bg-black border-white" : "bg-white border-black"}`} />
        <p className="toggle-box-text">DARK</p>
      </button>
    </div>
  );
};

export default ThemeToggle;
