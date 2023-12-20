import React from 'react'
import {customContainer, title, img, customCard, texto, content}  from "../projects/projects.module.css"
import { Link } from 'react-router-dom'
import codeClothes from "../../assets/codeclothes.jpg"
import moviesCode from "../../assets/moviesCode.jpg"

const Projects = () => {
  return (
    <section className='container pt-5' id="projects">
      <div className={`row mx-3 p-5 ${customContainer}` } >
        <div className={title}>
            <h2 className='display-6'>Proyectos</h2>
        </div>

        <div className={`col-10 col-md-5 col-lg-3 col-xl-4 mx-4 `}>
          <Link to={"https://codeclothes.netlify.app/"} target='_blank'>
            <div className={customCard}>
              <img src={codeClothes} className={img}alt='codeClothes'></img>
              <div className={content}>
                <p className={texto}>hola soy un texto</p>
              </div>
            </div>
          </Link>
        </div>


        <div className='col-10 col-md-5 col-lg-3 col-xl-4'>
        <Link to={"https://moviescodee.netlify.app/"} target='_blank'>
            <div className={customCard}>
              <img src={moviesCode} className={img} alt='moviesCode'></img>

            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects