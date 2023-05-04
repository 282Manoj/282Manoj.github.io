import React from "react";
import { useState } from "react";
import "./Skill.css"

function Skill() {
  const [services] = useState([
    {
      img: "/skills/html.png",
      name:"Html"
    },
    {
      img: "/skills/css.png",
      name:"Css"
    },
    {
      img: "/skills/javascript.png",
      name:"JavaScript"
    },
    {
      img: "/skills/node.png",
      name:"NodeJS"
    },
    {
      img: "/skills/dsa.png",
      name:"Dsa"
    },
    {
      img: "/skills/react.png",
      name:"React"
    },
    {
      img: "/skills/mongo.png",
      name:"MongoDB"
    },
    {
      img: "/skills/express.png",
      name:"express"
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
                  <img className="skills-card-img" src={el.img} alt="" />
                <div>
                    <p className="skills-card-name" style={{ color: "white", fontSize: "20px", marginLeft:"20px"}}>{el.name}</p>
                </div>
                </div>
              ))}
            </div>
          </div>
       
        </div>
  );
}

export default Skill;
