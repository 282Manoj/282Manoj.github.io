import React from 'react'
import "./Contact.css";

export default function Contact() {
  return (
    <>
    <div className='contacts' id="contact">
    
      <div className='contact-item'>
      <div className=' title'>
        CONTACT
      </div>
        <div>
      <i style={{backgroundColor:"blue"}} class="fa-brands fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/manoj-kumar282/"  target="_blank" rel="noopener noreferrer">Manoj Kumar</a>
        </div>
        <div>
        <i class="fa-brands fa-github"></i>
      <a href="https://github.com/282Manoj/"  target="_blank" rel="noopener noreferrer">282Manoj</a>
        </div>
        <div>
        <i  style={{backgroundColor:"red"}} class="fa-solid fa-envelope"></i>
      <a href="/">manojyad436@gmail.com</a>
        </div>
        <div>
        <i class="fa-solid fa-phone"></i>
      <a href="https://github.com/282Manoj/"  target="_blank" rel="noopener noreferrer">9801419354</a>
        </div>
        <div>
        <i  style={{color:"blue",backgroundColor:"white"}} class="fa-brands fa-twitter"></i>
      <a href="https://twitter.com/home"  target="_blank" rel="noopener noreferrer">@aarushroy282</a>
        </div>
      </div>
    </div></>
    
  )
}
