import React from 'react'
import {customContainer, title, img, customCard, content, iconSocial, socialMedia }  from "../projects/projects.module.css"
import { Link } from 'react-router-dom'
import codeClothes from "../../../assets/codeclothes.jpg"
import moviesCode from "../../../assets/moviesCode.jpg"
import sliceHaven from "../../../assets/sliceHaven.png"

const Projects = () => {
  return (

    <>
      <section className={`container p-0 ${customContainer}` } id="projects">
        <div className={`row justify-content-center mx-lg-5 p-3` } >
  
          <h5 className={`${title} text-center pb-5`}>Proyectos</h5>  


          
          <div className='col-10 col-md-5 col-lg-4 col-xl-4 pb-4 mb-3'>
              <div className={`card ${customCard}`}>
              <Link to={"https://slicehaven-project.netlify.app/"} target='_blank' className='text-decoration-none'>
                <img src={sliceHaven} className={`card-img-top ${img}`}alt='codeClothes'></img>
              </Link>
                <div className={content}>
                  <h6 className='pb-2 pt-2'>Slicehaven</h6>
                  <p> 
                    Sistema de gestión de reserva de mesas en un restaurante, el
                    usuario registrado podrá realizar reservas para un día y hora especifica, el
                    administrador podrá gestionar tanto a los usuarios como a las reservas.
                  </p>
                  <p className='pb-2'> Stack: React.js 18.1, Mongoose 8.0, Express.js 4.18, Node.js20.10</p>
                  <ul className={iconSocial}> 
                    <li>
                    <Link to={"https://github.com/agustintarancon?tab=repositories&q=sliceHaven&type=&language=&sort="} target="_blank" className={socialMedia}><i className="bi bi-github"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
     
  

          <div className='col-10 col-md-5 col-lg-4 col-xl-4 pb-4 mb-3'>
              <div className={`card ${customCard}`}>
                <Link to={"https://moviescodee.netlify.app/"} target='_blank' className='text-decoration-none'>
                  <img src={moviesCode} className={`card-img-top ${img}`}alt='moviesCode'></img>
                </Link>
                <div className={content}>
                  <h6 className="pb-2 pt-2">Proyecto 2:</h6>
                  <p> 
                    Pagina de películas con inicio de sesión y tabla de administración
                  </p>
                  <p>Html, css, bootstrap y javascript</p>
                  <ul className={iconSocial}> 
                    <li>
                    <Link to={"https://github.com/agustintarancon/Proyecto-RollingMovies.git"} target="_blank" className={socialMedia}><i className="bi bi-github"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
    
          </div>

          <div className='col-10 col-md-5 col-lg-4 col-xl-4 pb-4 mb-3'>
              <div className={`card ${customCard} `}>
            <Link to={"https://codeclothes.netlify.app/"} target='_blank' className='text-decoration-none'>
                <img src={codeClothes} className={`card-img-top ${img}`}alt='codeClothes'></img>
                </Link>
                <div className={content}>
                  <h6 className="pb-2 pt-2">CodeClothes</h6>
                  <p>Stack: Html5, css3, bootstrap.</p>
                  <ul className={iconSocial}> 
                    <li>
                    <Link to={"https://github.com/agustintarancon/Proyecto-CodeClothes.git"} target="_blank" className={socialMedia}><i className="bi bi-github"></i></Link>
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