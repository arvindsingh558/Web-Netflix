import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({ id }) => {
    const trailerItem=useSelector((state)=>state.movies.trailerVideo)
    useMovieTrailer(id)

    // +"?&autoplay=1&mute=1"

    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/L4DrolmDxmw?si="+trailerItem?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    )
}

export default VideoBackground
