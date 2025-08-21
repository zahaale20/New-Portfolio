const Projects = () => {
  const projectTitles = [
    "Project Alpha",
    "Beta Build",
    "Gamma Launch",
    "Delta Design",
    "Epsilon Expansion",
    "Project Alpha",
    "Beta Build",
    "Gamma Launch",
    "Delta Design",
    "Epsilon Expansion",
    "Project Alpha",
    "Beta Build",
    "Gamma Launch",
    "Delta Design",
    "Epsilon Expansion",
  ];

  return (
    <div className="section">
      <div className="flex flex-col space-y-10">
        {projectTitles.map((title) => (
          <button
            key={title}
            className="text-4xl font-satoshi-light text-left cursor-pointer transition-colors duration-300"
            onClick={() => alert(`Clicked on ${title}`)} // Replace with your action
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;


