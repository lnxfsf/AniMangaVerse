import { useState } from 'react'
import './App.css'


import {  Routes, Route, Navigate } from 'react-router-dom'

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Explore from "./pages/Explore";
import DetailedPage from './components/DetailedPage';


import  PageNotFound from './pages/PageNotFound';



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
        <Route path="/detailedpage" element={<DetailedPage />} />

		    <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />

      </Routes>


  {/*it will always show footer */}

    <Footer />

  
  </>
   )
}

export default App
