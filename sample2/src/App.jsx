// import React from 'react'

import NavBar from "./components/NavBar";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  
  return (
    <>
    
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
   </>
  )
}

export default App;