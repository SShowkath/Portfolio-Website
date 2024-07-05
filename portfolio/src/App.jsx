import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing.jsx'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Experience from './components/Experience/Experience.jsx'

function App() {

  return (
    <>
      <section id="Homepage">
      <Navbar/>
      <Landing/>
      </section>
      <section className="section--experience"><Experience/></section>
      <section className="section--portfolio">
        <Portfolio/>
      </section>
      <section><Hero/></section>
      <section><Contact/></section>
      

      
    </>
  )
}

export default App
