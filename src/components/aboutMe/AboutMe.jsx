import React from 'react'
import {sectionAboutMe, img, iconSocial ,socialMedia, font, } from '../aboutMe/aboutMe.module.css'
import { Link } from 'react-router-dom'
import imgMe from '../../assets/me.png' 

const AboutMe = () => {
  return (
    <section className={`container-fluid ${sectionAboutMe}`} id="aboutMe">
    <div className="row d-flex justify-content-center flex-row-reverse">
      <div className={`col-12 col-xl-3 d-flex justify-content-center mb-4`}>
        <img src={imgMe} alt="Agustín Tarancón" className={`${img}`}></img>
      </div>
    
      <div className="col-12 col-xl-7 d-flex flex-column justify-content-center ">

        <h1 className=" display-6">HOLA! SOY AGUSTIN TARANCON.</h1>
        <p className={font}>Como desarrollador Full-Stack me apasiona crear paginas web eficientes
          y atractivas, me considero alguien detallista por lo que priorizo buenas
          practicas y un código limpio. Durante mi formación participe en
          proyectos que me permitieron ampliar mis habilidades tanto del lado del
          cliente como del servidor, además aprendí a trabajar en equipo con
          metodologías agiles. Estoy en constante crecimiento en el mundo de la programación por lo que
          siempre estoy dispuesto a seguir aprendiendo.
        </p>

        <div className="mt-3">
          <ul className={iconSocial}> 
            <li>
              <Link to={"https://www.linkedin.com/in/agust%C3%ADn-taranc%C3%B3n-494b91283/"} target="_blank" className={socialMedia}><i className="bi bi-linkedin"></i></Link>
            </li>
            <li>
            <Link to={"https://github.com/agustintarancon"} target="_blank" className={socialMedia}><i className="bi bi-github"></i></Link>
            </li>
            <li>
            <Link to={"https://drive.google.com/file/d/1nR9aIY2yB-F5zvBTrSuNjehsSG5WOjgx/view?usp=sharing"} target="_blank" className={socialMedia}><i>CV</i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutMe