import React from 'react'
import {customContainer, title, img, customCard, content, iconSocial, socialMedia }  from "../projects/projects.module.css"
import { Link } from 'react-router-dom'
import codeClothes from "../../assets/codeclothes.jpg"
import moviesCode from "../../assets/moviesCode.jpg"
import sliceHaven from "../../assets/sliceHaven.png"

const Projects = () => {
  return (

    <>
      <section className='container p-0' id="projects">
        <div className={`row mx-3 ${customContainer}` } >
        <div className={title}>
          <h5 className='text-center'>PROYECTOS</h5>  
        </div>

          <div className='col-10 col-md-5 col-lg-3 col-xl-4 pb-4'>
            <Link to={"https://codeclothes.netlify.app/"} target='_blank' className='text-decoration-none'>
              <div className={`card bg-dark ${customCard}`}>
                <img src={codeClothes} className={`card-img-top ${img}`}alt='codeClothes'></img>
                <div className={content}>
                  <h5 className="card-title">CodeClothes</h5>
                  <p>Stack: Html5, css3, bootstrap 5.X.</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-10 col-md-5 col-lg-3 col-xl-4 pb-4'>
          <Link to={"https://moviescodee.netlify.app/"} target='_blank' className='text-decoration-none'>
              <div className={`card bg-dark ${customCard}`}>
                <img src={moviesCode} className={`card-img-top ${img}`}alt='moviesCode'></img>
                <div className={content}>
                  <h5 className="card-title">Proyecto 2:</h5>
                  <p>Html, css, bootstrap y javascript</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-10 col-md-5 col-lg-3 col-xl-4 pb-4'>
              <div className={`card bg-dark ${customCard}`}>
                <img src={sliceHaven} className={`card-img-top ${img}`}alt='codeClothes'></img>
                <div className={content}>
                  <h5>Slicehaven</h5>
                  <p> 
                    Sistema de gestión de reserva de mesas en un restaurante, el
                    usuario registrado podrá realizar reservas para un día y hora especifica, el
                    administrador podrá gestionar tanto a los usuarios como a las reservas.
                  </p>
                  <p> Stack: React.js 18.1, Mongoose 8.0, Express.js 4.18, Node.js20.10</p>
                  <ul className={iconSocial}> 
                    <li>
                    <Link to={"https://github.com/agustintarancon?tab=repositories&q=sliceHaven&type=&language=&sort="} target="_blank" className={socialMedia}><i className="bi bi-github"></i></Link>
                    </li>
                    <li>
                      <Link to={"https://codeclothes.netlify.app/"} target="_blank" className={socialMedia}><i className="bi bi-linkedin"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
          </div>


        </div>
      </section>
    </>

  )
}

export default Projects