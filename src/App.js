import { useEffect, useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery"
import Navbar from "./scenes/navbar"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import LineGradient from "./components/LineGradient"
import MySkill from "./scenes/MySkills.jsx"
import Projects from "./scenes/Projects"
import Testimonials from "./scenes/Testimonials"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer.jsx"

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px")
  const [isTopOfPage, setIsTpOfPage] = useState(true);

  useEffect (() =>{
    const handleScroll = ()=>{
      if(window.scrollY === 0){ 
        setIsTpOfPage(true)
        setSelectedPage("home")
      };
      if(window.scrollY !== 0) setIsTpOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
         isTopOfPage={isTopOfPage} selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreen &&(
          <DotGroup 
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing selectedPage = {selectedPage}/>
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <MySkill/>
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
          <Projects />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <Testimonials/>
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
          <Contact/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
