import React from 'react'
import useWindowsize from '../Hook/HandW.hook'
import "./Navbar.css"
import DrawerExample from './dwrawer'

const Navbar = () => {
  const [height,width] =useWindowsize();
  return (
    <div id="nav-menu" className='nav-box'>
      <div className='logo'>Manoj Kumar.</div>
      {width>900 ?
      <div className="option">
        <a className="nav-link home" href="#home">Home</a>
        <a className='nav-link about' href="#about">About</a>
        <a className='nav-link skills' href="#skills">Skills</a>
        <a className="nav-link projects"href="#projects">Project</a>
        <a className="nav-link contact" href="#contact">Contact</a>
        <a className='nav-link resume' href="https://drive.google.com/file/d/1eu5eoFs6eUsc4emkegEwjsgQZKyi1Dl-/view?usp=sharing"
          target="_blank" rel="noreferrer"> Resume</a>
      </div> :
      <DrawerExample/>
}
    </div>
  )
}

export default Navbar
