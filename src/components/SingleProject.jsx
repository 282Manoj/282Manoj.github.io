import React from 'react'
import "./SinglePage.css"

const SingleProject = ({title,img,gLink,dLink,des}) => {
    console.log(title);
  return (
    <div className='SingleProject-box'>
      <h3>{title}</h3>
      <img src={img} alt="project-img" />
      <p>{des}</p>
      <div className='button-box'>
        <button><a href={gLink} rel="noreferrer"  target="_blank">Code</a></button>
        <button><a href={dLink} rel="noreferrer"  target="_blank">Live</a></button>
      </div>
    </div>
  )
}

export default SingleProject
