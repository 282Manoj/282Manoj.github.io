import React from "react";
// import styled from "styled-components";
import "../App.css";
const Stats = () => {
  return (
    // streak
    <div >
      <div >
        <a href="https://github.com/282Manoj">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=282Manoj"
            alt="hell"
          />
        </a>
      </div>

      <div id="github-stats-card"
        style={{
          width: "56%",
          display: "flex",
          margin: "auto",
          
        }}
      >
        <a href="https://github.com/282Manoj">
          <img 
            align="right"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=282Manoj"
            alt="hello" //launguages
          />
        </a>
        <a href="https://github.com/282Manoj">
          <img 
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=282Manoj&count_private=true&show_icons=true"
            alt="hle" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
