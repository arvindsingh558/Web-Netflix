import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    return (
        <div>
            <div className='text-2xl text-white font-bold px-2 mx-2 mt-2'>{title}</div>
            <div className='flex overflow-x-scroll overflow-y-hidden'>
                <div className='flex gap-4 px-4 mt-4'>
                    {movies &&
                        movies.map((card) => <MovieCard key={card.id} posterPath={card.poster_path} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default MovieList
