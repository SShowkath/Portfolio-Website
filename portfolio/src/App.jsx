import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'


function App() {
  

  return (
    <>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      
      <section>parallax</section>
      <section>Portfolio</section>
      <section>Parallax</section>
      
    </>
  )
}

export default App
