import React from 'react'
import {customLink, customNavbar} from "./navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg p-3 position-fixed w-100 ${customNavbar}`}>
        <div className="container ">
          <a href="/" className="navbar-brand text-white" >TaranconAgustin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a href="/" className={`${customLink} text-decoration-none `} aria-current="page">Inicio</a>
              </li>

              <li className="nav-item">
                <a href="#projects" className={`${customLink} text-decoration-none `}>Proyectos</a>
              </li>

              {/* <li className="nav-item">
                <a href="#" className={`${customLink} text-decoration-none `}>Skills</a>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar