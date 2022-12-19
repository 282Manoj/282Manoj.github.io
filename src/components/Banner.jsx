/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-wrapper">
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
          href="https://drive.google.com/file/d/1eu5eoFs6eUsc4emkegEwjsgQZKyi1Dl-/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Banner;
