/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import SingleProject from "./SingleProject";
import "./Project.css";

function Projects() {
  const [projects] = useState([
    {
      title: "Meanby-clone",
      img: "/projects/1.png",
      gLink: "https://github.com/282Manoj/Meanbuy.com2",
      dLink: "",
      des: "MeanBuy is the future of online shopping; we let our customers Pay What They Want to Pay on a variety of retail products, ranging from women’s accessories to consumer electronics on MeanBuy.com. Our disruptive, patent pending flexible pricing technology is based on multi-dimensional consumer behaviorism exemplified by today’s online shopper. ",
      tstack:["javaScript","HTML","CSS"]
    },
    {
      title: "zee5-clone.com",
      img: "/projects/2.png",
      gLink: "https://github.com/Pradyumancoder/ZEE5-CLONE",
      dLink: "https://vidfy-elastic-punishment.netlify.app/",
      des: "At Zee5, the online video streaming Over The Top (OTT) platform, we truly believe that for entertainment to come alive, you need to feel it. That’s where Zee5 brings in the advantage of the language of your comfort! With 12 navigational and featured languages across original features, live TV, catch up TV, lifestyle shows, children's programmes,",
      tstack:["javaScript","HTML","CSS","React"]
    },
    {
      title: "clockfy.com-clone",
      img: "/projects/3.png",
      gLink: "https://github.com/Hartumpa/clockify-clone",
      dLink: "",
      des: "Clockify is the only 100% free time tracking software on the market. It’s so simple that you and your team can track work time with one click.",
      tstack:["javaScript","HTML","CSS"]
    },
    {
      title: "Semrush.com-clone",
      img: "/projects/4.png",
      gLink: "https://github.com/282Manoj/statusque-touch-2472",
      dLink:
        "https://manojyad436-gmail-com-makes-great-sites-bdd0c.netlify.app/",
      des: "Semrush is an all-in-one tool suite for improving online visibility and discovering marketing insights. Our tools and reports are able to help marketers that work ",
      tstack:["javaScript","HTML","CSS","React"]
    },
  ]);
  return (
    <div id="projects">
      <div className="pro">
      <h2  className="project-title" style={{fontWeight:"600",color:"white",fontSize:"24px"}}>Projects</h2></div>
      <div className="project-box">
        {projects.map((el) => {
          return <SingleProject {...el} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
