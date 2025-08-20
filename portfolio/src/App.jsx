import { useState, useEffect } from 'react';
import UnicornScene from "unicornstudio-react";
import Loading from './components/Loading.jsx';
import Navigation from './components/Navigation.jsx'; // Now a navigation component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Logic for the loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Logic for the theme toggle
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSceneLoad = () => {
    setShowContent(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <section 
        id="home" 
        className={`w-full min-h-screen relative overflow-hidden flex-center transition-opacity duration-1000 ease-in ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 z-0 flex-center p-[50px]">
          <div className="relative w-full h-full border border-gray-500 overflow-hidden">
            
            {/* Navigation component */}
            <Navigation />

            {/* Background */}
            <div className={`absolute inset-0 w-full h-full transition-filter duration-500 ease-in-out ${theme === '' ? 'filter-invert-and-brighten' : ''}`}>
              <UnicornScene
                jsonFilePath="/unicorn/lightsScene.json"
                width="3440px"
                height="1400px"
                scale={1}
                dpi={1}
                lazyLoad={false}
                production={true}
                altText="Lights Scene"
                style={{ width: "100%", height: "100%" }}
                onLoad={handleSceneLoad}
                onError={(err) => console.error("Error loading lights scene", err)}
              />
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="absolute top-8 right-15 flex z-20">
          <button
            onClick={() => setTheme('')}
            className="flex items-center mr-4 cursor-pointer"
          >
            <div className={`w-3 h-3 ${theme === '' ? 'bg-black border-black' : 'bg-white border-white'} border`}></div>
            <p className="text-boxes ml-1">LIGHT</p>
          </button>

          <button
            onClick={() => setTheme('dark')}
            className="flex items-center cursor-pointer"
          >
            <div className={`w-3 h-3 ${theme === 'dark' ? 'bg-black border-white' : 'bg-white border-black'} border`}></div>
            <p className="text-boxes ml-1">DARK</p>
          </button>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-3 left-12 z-20 flex flex-row">
          <a href="https://linkedin.com/in/alexczaharia" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FontAwesomeIcon icon={faSquareLinkedin} />
          </a>
          <a href="https://github.com/zahaale20" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>

        {/* Made by Alex Zaharia */}
        <div className="absolute bottom-5 right-15 z-20">
          <p className="text-madeby">Made by Alex Zaharia</p>
        </div>
      </section>
    </main>
  );
};

export default App;