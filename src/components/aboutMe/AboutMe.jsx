import React from 'react'
import {sectionAboutMe, img, iconSocial ,socialMedia} from '../aboutMe/aboutMe.module.css'
import { Link } from 'react-router-dom'
import imgMe from '../../assets/me.jpg' 

const AboutMe = () => {
  return (
    <section className={`container-fluid ${sectionAboutMe}`} id="aboutMe">
    <div className="row d-flex justify-content-center flex-row-reverse">
      <div className="col-12 col-xl-3 d-flex justify-content-center mb-4">
        <img src={imgMe} alt="Agustín Tarancón" className={`${img}`}></img>
      </div>
    
      <div className="col-12 col-xl-7 d-flex flex-column justify-content-center ">

        <h1 className="display-6">HOLA, SOY AGUSTIN TARANCON</h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat optio nam velit voluptatum quisquam adipisci aperiam animi dolorem commodi aspernatur dicta impedit, exercitationem laboriosam quo veniam minima quos veritatis!</p>

        <div className="mt-3">
          <ul className={iconSocial}> 
            <li>
              <Link to={"https://www.linkedin.com/in/agust%C3%ADn-taranc%C3%B3n-494b91283/"} target="_blank" className={socialMedia}><i className="bi bi-linkedin"></i></Link>
            </li>
            <li>
            <Link to={"https://github.com/agustintarancon"} target="_blank" className={socialMedia}><i className="bi bi-github"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutMe