import React from 'react'
import { img, customCard, titleClass } from "./card.module.css"
import { Link } from 'react-router-dom'


const Card = ({ imgSource, text1, id }) => {

  return (
    <div className='col-12 col-md-5 col-lg-6 col-xl-6 mb-3'>
      <Link to={`/detail/${id}`} className='text-decoration-none'>
        <div className={`${customCard}`}>
          <img src={imgSource} className={`${img}`} alt='Projecto' />
        </div>
      <h4 className={`py-1 pt-3 ${titleClass}`}>{text1}</h4>
      </Link>
    </div>
  )
}

export default Card