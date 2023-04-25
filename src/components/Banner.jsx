/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
import cv from "../Assets/Manoj_Kumar_Resume.pdf";
import { DownloadIcon } from '@chakra-ui/icons'


function Banner() {
  return (
    <div className="ban" >

    
    <div className="banner-wrapper" id="home">
      <img src="/Manoj.jpeg" alt="" />
      <div className="banner-content">
        <h6>Hello, I'm Manoj Kumar</h6>
        <h3> Full Stack Web Developer</h3>
        <p>
          I am a Full stack web developer doing militry style coding and
          learning MERN Stack at Masai School. I have done various group as well
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
    </div>
    </div>
  );
}

export default Banner;
