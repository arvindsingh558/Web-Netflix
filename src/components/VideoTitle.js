import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-20 sm:pt-28 lg:pt-32 w-screen aspect-video text-white absolute bg-gradient-to-r from-black'>
      <h1 className='text-4xl sm:text-6xl font-bold mx-4 p-2'>{title}</h1>
      <p className='w-1/2  lg:w-1/3 mx-4 p-2 md:block hidden'>{overview}</p>
      <div className='mx-4 p-2'>
        <button className='bg-white text-black py-1 px-2 sm:px-6 sm:py-2 rounded hover:bg-gray-300'>▷ Play</button>
        <button className='bg-gray-600 hover:bg-gray-500 ml-2 text-white py-1 px-2 sm:px-4 sm:py-2 rounded  md:visible invisible'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
