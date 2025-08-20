import { useState, useEffect } from 'react';

const Loading = () => {
  const [showName, setShowName] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const nameTimer = setTimeout(() => {
      setShowName(false);
    }, 1700);

    const portfolioTimer = setTimeout(() => {
      setShowPortfolio(false);
    }, 2000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(portfolioTimer);
    };
  }, []);

  return (
    <div id="loading" className="flex-center w-full min-h-screen">
      <p className={`text-name transition-opacity duration-700 ${showName ? 'opacity-100' : 'opacity-0'}`}>
        Alex Zaharia
      </p>
      <p className={`text-portfolio transition-opacity duration-700 ${showPortfolio ? 'opacity-100' : 'opacity-0'}`}>
        Portfolio
      </p>
    </div>
  );
};

export default Loading