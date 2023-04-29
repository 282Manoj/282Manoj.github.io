/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
import About from "./About"

function Banner() {
  return (
    <div className="ban" >

    
    <div className="banner-wrapper" id="home">
      <img  className="home-img" src="/Manoj.jpeg" alt="" />
      <About/>
    </div>
    </div>
  );
}

export default Banner;
