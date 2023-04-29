import React from "react";
import { useState } from "react";
import "./Skill.css"

function Skill() {
  const [services] = useState([
    {
      img: "/skills/html.png",
    },
    {
      img: "/skills/css.png",
    },
    {
      img: "/skills/javascript.png",
    },
    {
      img: "/skills/node.png",
    },
    {
      img: "/skills/dsa.png",
    },
    {
      img: "/skills/react.png",
    },
    {
      img: "/skills/mongo.png",
    },
    {
      img: "/skills/express.png",
    },
  ]);
  return (
        <div id="skills">
          <div className="skill-box" id="Skills">
            <div className="title">
              <h3>SKILLS</h3>
            </div>
            <div className="services" id="services">
              {services.map((el, i) => (
                <div className="imgg skills-card" key={i}>
                  <img  className="skills-card-image" src={el.img} alt="" />
                </div>
              ))}
            </div>
          </div>
       
        </div>
  );
}

export default Skill;
