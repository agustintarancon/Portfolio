import React from 'react'
import { containerCustom, title, text } from "./aboutMe.module.css"

const AboutMe = () => {
  return (
    <div className='container d-flex flex-column align-items-center' id='aboutMe'>
      <div className={containerCustom}>
        <h2 className={title}>Sobre mi</h2>
        <p className={text}>Soy un desarrollador Full-Stack, con dos años de experiencia en el desarrollo de aplicaciones web y mobile. Mi especialización radica en crear soluciones eficientes, escalables y con un enfoque en la calidad del código tanto en el frontend como en el backend. Trabajo con tecnologías modernas y me adapto rápidamente a nuevas herramientas.
          Tengo experiencia colaborando en equipos utilizando metodologías y herramientas de control de versiones para asegurar proyectos exitosos. Estoy siempre en constante aprendizaje para seguir mejorando mis habilidades y aportar valor en cada proyecto.</p>
      </div>
    </div>
  )
}

export default AboutMe