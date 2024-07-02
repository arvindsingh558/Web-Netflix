import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const useNowPlaying=()=>{
    const dispatch =useDispatch()

  const getNowPlaying=async ()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const data=await response.json()

    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(()=>{
    getNowPlaying()
  },[])
}

export default useNowPlaying