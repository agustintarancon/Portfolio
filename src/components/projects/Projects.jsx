import React from 'react'
import {customContainer, title, img, customCard }  from "../projects/projects.module.css"
import { Link } from 'react-router-dom'
import codeClothes from "../../assets/codeclothes.jpg"
import moviesCode from "../../assets/moviesCode.jpg"

const Projects = () => {
  return (
    <section className='container pt-5' id="projects">
      <div className={`row mx-3 ${customContainer}` } >
        <div className={title}>
            <h2 className='text-center  display-6'>Proyectos</h2>
        </div>

        <div className='col-10 col-md-5 col-lg-3 col-xl-3 pb-4'>
          <Link to={"https://codeclothes.netlify.app/"} target='_blank' className='text-decoration-none'>
            <div className={`card bg-dark ${customCard}`}>
              <img src={codeClothes} className={`card-img-top ${img}`}alt='codeClothes'></img>
              <div className="card-body">
                <h5 className="card-title text-white">Proyecto 1:</h5>
                <p>Html, css, bootstrap.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className='col-10 col-md-5 col-lg-3 col-xl-3 pb-4'>
        <Link to={"https://moviescodee.netlify.app/"} target='_blank' className='text-decoration-none'>
            <div className={`card bg-dark ${customCard}`}>
              <img src={moviesCode} className={`card-img-top ${img}`}alt='moviesCode'></img>
              <div className="card-body">
                <h5 className="card-title text-white">Proyecto 2:</h5>
                <p>Html, css, bootstrap y javascript</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects