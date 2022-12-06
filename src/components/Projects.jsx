/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Meanby-clone",
      img: "/projects/1.png",
      gLink: "",
      lLink: "https://taupe-malabi-f40655.netlify.app/nav+home.html",
      des:"MeanBuy is the future of online shopping; we let our customers Pay What They Want to Pay on a variety of retail products, ranging from women’s accessories to consumer electronics on MeanBuy.com. Our disruptive, patent pending flexible pricing technology is based on multi-dimensional consumer behaviorism exemplified by today’s online shopper. ",
    },
    {
      title: "maxfashion.com-clone",
      img: "/projects/2.png",
      gLink: "",
      lLink: "",
      des:"Max offers apparel, footwear and accessories for the entire family - women, men and children. Customers can expect a world-class shopping environment stocking the latest in international fashion from around the globe, as well as Max's own label of in-house designs in carefully chosen colour palettes. Shoppers enjoy great prices on an excellent range of over 3,000 styles every season, in brand new designs, silhouettes and fabrics.",
    },
    {
      title: "clockfy.com-clone",
      img: "/projects/3.png",
      gLink: "",
      lLink: "https://me-hafiz.netlify.app/",
      des:"Clockify is the only 100% free time tracking software on the market. It’s so simple that you and your team can track work time with one click.",
    },
    {
      title: "Semrush.com-clone",
      img: "/projects/4.png",
      gLink: "",
      lLink: "https://manojyad436-gmail-com-makes-great-sites-bdd0c.netlify.app/",
      des:"Semrush is an all-in-one tool suite for improving online visibility and discovering marketing insights. Our tools and reports are able to help marketers that work in the following services: SEO, PPC, SMM, Keyword Research, Competitive Research, PR, Content Marketing, Marketing Insights, Campaign Management. ",
    },
   
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/282Manoj"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
