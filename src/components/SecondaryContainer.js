import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className=''>
      <div className='relative xl:-mt-44'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
      </div>
      <MovieList title={"Popular"} movies={movies?.popularMovie} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovie} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovie} />
    </div>
  )
}

export default SecondaryContainer
