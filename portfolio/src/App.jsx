import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import About from './components/About/About.jsx'


function App() {
  

  return (
    <>
    
      <section id="Homepage">
      <Navbar/>
        <Hero/> 
      </section>
      
      <section className="section--portfolio">
        <Portfolio/>
      </section>
      <section><Contact/></section>
      

      
    </>
  )
}

export default App
