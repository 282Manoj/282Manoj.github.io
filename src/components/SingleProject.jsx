import React from 'react'
import "./SinglePage.css"

const SingleProject = ({title,img,gLink,dLink,des,tstack}) => {
    console.log(tstack);
  return (
    <div className='SingleProject-box project-card'>
      <h3 className='project-title'>{title}</h3>
      <img src={img} alt="project-img" />
      <p className='project-description'>{des}</p>
      <div className='tstack'>
      <div className='button-box'>
        <button><a  className='project-github-link' href={gLink} rel="noreferrer"  target="_blank">Code</a></button>
        <button><a  className='project-deployed-link'href={dLink} rel="noreferrer"  target="_blank">Live</a></button>
      </div>
        <div className='tstack-main project-tech-stack'>
          {tstack.map((el) => {
            return <p style={{ color:"white"}}>{ el}</p>
          })}
     </div>
      </div>
    </div>
  )
}

export default SingleProject
