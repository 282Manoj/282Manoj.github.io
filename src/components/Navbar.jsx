import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav-box'>
      <div className='logo'>Manoj Kumar.</div>
      <div className="option">
        <a href="#home">Home</a>
        <a href="#Skills">Skills</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact</a>
        <a href="#">Resume</a>
      </div>
    </div>
  )
}

export default Navbar
