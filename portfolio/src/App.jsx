import React, { useState, useEffect } from 'react'
import './App.css'
import Landing from './components/Landing/Landing.jsx'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Experience from './components/Experience/Experience.jsx'
import MobileNav from './components/MobileNav/MobileNav.jsx'
import DesktopNavbar from './components/DesktopNavbar/DekstopNavbar.jsx'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      {isDesktop ? <DesktopNavbar /> : <MobileNav />}
      <div className="content-wrapper">
        <section id="Homepage">
          <Landing/>
        </section>
        <section className="section--experience"><Experience/></section>
        <section className="section--portfolio">
          <Portfolio/>
        </section>
        <section className="section--hero"><Hero/></section>
        <section><Contact/></section>
      </div>
    </div>
  )
}

export default App