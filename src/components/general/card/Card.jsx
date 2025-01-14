import React from 'react'
import { img, customCard, titleClass } from "./card.module.css"
import { Link } from 'react-router-dom'


const Card = ({ imgSource, text1, id }) => {

  return (
    <div className='col-12 col-md-5 col-lg-6 col-xl-6 mb-5'>
      <Link to={`/detail/${id}`} className='text-decoration-none'>
        <div className={`${customCard}`}>
          <img src={imgSource} className={`${img}`} alt='Projecto' />
        </div>
      </Link>
    </div>
  )
}

export default Card