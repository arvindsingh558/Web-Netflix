import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-24 md:w-48'>
      <img className='hover:scale-110' src={IMG_CDN_URL+posterPath} alt="cardImage" />
    </div>
  )
}

export default MovieCard
