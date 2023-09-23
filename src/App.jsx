import { useState } from 'react'
import './App.css'


import {  Routes, Route } from 'react-router-dom'

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Explore from "./pages/Explore";




function App() {

  
  return (
  <>
  {/*it will always show navbar */}
    <Navbar />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>


  {/*it will always show footer */}
    <Footer />
  
  </>
   )
}

export default App
