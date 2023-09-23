import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'


// import components
import Navbar from "./components/Navbar";




function App() {

  return (
  <>
  {/*it will always show navbar */}
    <Navbar />
    

    {/*main placeholder for components 
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>

    </Router>

  {/*it will always show footer */}
  
  </>
   )
}

export default App
