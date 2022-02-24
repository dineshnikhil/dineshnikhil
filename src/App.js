import './App.css';
import React, { useState, useEffect } from 'react';

//importing the function commponents.
import Nav from './commponents/nav/Nav';
import Home from './commponents/home/Home';
import About from './commponents/about/About';
import Skills from './commponents/skills/Skills';
import Projects from './commponents/projects/Projects';
import Contact from './commponents/contact/Contact';
import Footer from './commponents/footer/Footer';
import WellcomeMsg from './commponents/ui/WellcomeMsg';
import NavModal from './commponents/nav/NavModal';

function App() {

  const [showNav, setShowNav] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    setIsFirstVisit(true)
  }, []);

  function vistHandler() {
    setIsFirstVisit(false)
  }

  function showNavHandler() {
    setShowNav(true)
  }

  function hideNavHandler() {
    setShowNav(false)
  }

  return (
    <React.Fragment>
      {isFirstVisit && <WellcomeMsg closeMsg={vistHandler}/>}
      {showNav && <NavModal closeNav={hideNavHandler} />}
      <Nav showNav={showNavHandler} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
