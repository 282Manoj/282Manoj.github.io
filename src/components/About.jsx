import React from 'react'
import cv from "../Assets/Manoj_Kumar_Resume.pdf";
import { DownloadIcon } from '@chakra-ui/icons'

const About = () => {
  return (
    <div className="banner-content about section" id="about">
      <h1 style={{fontSize:"40px",color:"white"}}>About</h1>
    <h6 id="user-detail-name">Hello, I'm Manoj Kumar</h6>
    <h3> Full Stack Web Developer</h3>
    <p id="user-detail-intro">
      I am a Full stack web developer doing militry style coding and
      learning MERN,MongoDB,NodeJs,Express,React Stack at Masai School. I have done various group as well
      as individual projects in my coding journey. My interests are coding,
      reading about planets, browsing, exploring new areas.
    </p>
    <a
      className="btn"
      href={cv} download={cv}
      target="_blank" rel="noreferrer">
        Resume  <DownloadIcon/>
    </a>
  </div>
  )
}

export default About