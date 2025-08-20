import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import UnicornScene from "unicornstudio-react";

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default App;
