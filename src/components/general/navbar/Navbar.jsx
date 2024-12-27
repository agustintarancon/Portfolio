import React from 'react'
import { customLink, customNavbar, logoClass } from "./navbar.module.css"
import logo from "../../../assets/Logo.png"

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg p-3 px-5 position-fixed w-100 ${customNavbar}`}>
        <a href="/" className="navbar-brand text-white" >
          <img src={logo} alt="logo" className={logoClass} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a href="/" className={`${customLink} text-decoration-none `} aria-current="page">INICIO</a>
            </li>

            <li className="nav-item">
              <a href="#projects" className={`${customLink} text-decoration-none `}>PROYECTOS</a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar