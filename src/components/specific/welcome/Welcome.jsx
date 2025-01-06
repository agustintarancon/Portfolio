import React from 'react'
import { customContainer, iconSocial, socialMedia, title, infoContainer, subtitle, imgClass } from './welcome.module.css'
import { Link } from 'react-router-dom'
import fondo from "../../../assets/fondo.jpg"

const Welcome = () => {
  return (
    <section className={`container ${customContainer}`} id="home">

      <div className={`d-flex flex-column align-items-center`}>
        <div className={infoContainer}>
          <h2 className={title}>BIENVENIDOS <span className='fw-bold'>SOY AGUSTIN</span></h2>
          <p className={subtitle}>DESARROLLADOR FULL STACK</p>
        </div>
      </div>

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

      <img src={fondo} className={imgClass} alt="Imagen de fondo" />

    </section>
  )
}

export default Welcome