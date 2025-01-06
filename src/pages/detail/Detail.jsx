import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../../data/projects';
import { img, containerCustom, divImg, desc1, desc2, title, linkWeb, descDiv } from "./detail.module.css"

const Detail = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className={`container ${containerCustom}`}>
      <div className={`row`}>
        <div className={`col-12 col-md-12 col-lg-6 col-xl-6 ${divImg}`}>
          <Link to={project.link} target='_blank' className='text-decoration-none'>
            <img src={project.imgSource} className={img} alt={project.text1} />
          </Link>
        </div>
        <div className={`col-12 col-md-12 col-lg-6 col-xl-6 ${descDiv}`}>
          <h2 className={title}>{project.text1}</h2>
          <p className={desc1}>{project.desc}</p>
          <p className={desc2}>{project.techStack}</p>
          <Link to={project.link} target='_blank' className='text-decoration-none'>
            <button className={linkWeb}>{project.text2}</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Detail