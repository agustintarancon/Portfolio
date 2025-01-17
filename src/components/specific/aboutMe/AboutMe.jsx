import React from 'react'
import { containerCustom, title, text, rowCustom, imgClass } from "./aboutMe.module.css"
import fotoPerfil from "../../../assets/me.png"

const AboutMe = () => {
  return (
    <div className={`container-fluid d-flex flex-column align-items-center justify-content-center ${containerCustom}`} id='aboutMe'>

      <div className={`row ${rowCustom}`}>

        <div className="col-11 col-md-7 col-lg-5 me-lg-5" data-aos="fade-right" >
          <h2 className={title}>SOBRE MI</h2>
          <p className={text}>Soy un desarrollador Full-Stack, con dos años de experiencia en el desarrollo de aplicaciones web y mobile. Mi especialización radica en crear soluciones eficientes, escalables y con un enfoque en la calidad del código tanto en el frontend como en el backend. </p>
          <p className={text}>
            Trabajo con tecnologías modernas y me adapto rápidamente a nuevas herramientas.
            Tengo experiencia colaborando en equipos utilizando metodologías y herramientas de control de versiones para asegurar proyectos exitosos. Estoy siempre en constante aprendizaje para seguir mejorando mis habilidades y aportar valor en cada proyecto.
          </p>
        </div>

        <div className='col-11 col-md-7 col-lg-3 ms-lg-5 d-flex justify-content-lg-end justify-content-center pt-3 pt-lg-5' data-aos="fade-left"  >
          <img src={fotoPerfil} className={imgClass} alt="Agustin Tarancon" />
        </div>

      </div>

    </div>

  )
}

export default AboutMe