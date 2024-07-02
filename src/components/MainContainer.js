import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovie)

    if(!movies) return 
    
    const mainMovie=movies[0]
   
    const {overview, original_title, id}=mainMovie

  return (
    <div>
      <VideoTitle overview={overview} title={original_title} />
      <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer
