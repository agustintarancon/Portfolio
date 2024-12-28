import React from 'react'
import {sectionAboutMe, img, iconSocial ,socialMedia, font, title1, title2 } from '../aboutMe/aboutMe.module.css'
import { Link } from 'react-router-dom'
import imgMe from '../../../assets/me.png' 

const AboutMe = () => {
  return (
    <section className={`container-fluid ${sectionAboutMe}`} id="aboutMe">
      <div className="row d-flex justify-content-center ">
        <div className={`col-10 col-md-5 col-xl-4 d-flex justify-content-center mb-4 `}>
          <img src={imgMe} alt="Agustín Tarancón" className={`${img}`}></img>
        </div>
      
        <div className="col-11 col-md-6 col-xl-5 d-flex flex-column justify-content-center  px-0">

          <h5 className={title1}>HOLA! SOY AGUSTIN.</h5>
          <h2 className={title2}>DESARROLLADOR FULL STACK</h2>
          <p className={font}>Como desarrollador Full-Stack me apasiona crear paginas web eficientes
            y atractivas, me considero alguien detallista por lo que priorizo buenas
            practicas y un código limpio. 
          </p>
       
          <div className={iconSocial}>  
            <Link to={"https://www.linkedin.com/in/agust%C3%ADn-taranc%C3%B3n-494b91283/"} target="_blank" className='me-4'>
              <p className={`bi bi-linkedin ${socialMedia}`}></p>
            </Link>
           
            <Link to={"https://github.com/agustintarancon"} target="_blank" className='me-4'>
              <p className={`bi bi-github ${socialMedia}`}></p>
            </Link>
           
            <Link to={"https://drive.google.com/file/d/1nR9aIY2yB-F5zvBTrSuNjehsSG5WOjgx/view?usp=sharing"} target="_blank" className='text-decoration-none'>
              <p className={`${socialMedia} fw-bold`}>CV</p>
            </Link>
          </div>
       
        </div>
      </div>
  </section>
  )
}

export default AboutMe