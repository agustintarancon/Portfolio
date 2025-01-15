import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../../data/projects';
import { containerCustom, divImg, desc1, desc2, title, btn, descDiv, svgIcon, button } from "./detail.module.css"
import ImageCarousel from '../../components/specific/carrusel/Carrusel';

const Detail = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); 

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className={`container-fluid ${containerCustom}`}>
      <button className={button} onClick={() => navigate(-1)}>
        <svg className={svgIcon} viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </button>

      <div className={`row`}>

        <div className={`col-12 col-md-12 col-lg-7 col-xl-7 ${divImg}`}>
          <ImageCarousel images={project.images} />
        </div>

        <div className={`col-12 col-md-12 col-lg-5 col-xl-5 ${descDiv}`}>
          <h2 className={title}>{project.text1}</h2>
          <p className={desc1}>{project.desc}</p>
          <p className={desc2}>{project.techStack}</p>
          <Link to={project.link} target='_blank' className='text-decoration-none'>
            <button className={btn}>{project.text2}</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Detail