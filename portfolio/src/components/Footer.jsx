import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-row">
        <a href="https://linkedin.com/in/alexczaharia" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FontAwesomeIcon icon={faSquareLinkedin} />
        </a>
        <a href="https://github.com/zahaale20" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
      </div>
      <p className="text-madeby select-none">Made by Alex Zaharia</p>
    </div>
  );
};

export default Footer;