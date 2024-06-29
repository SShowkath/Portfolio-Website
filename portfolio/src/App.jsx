import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Landing from "./pages/Landing"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Landing />} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
