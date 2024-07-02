import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addUpcomingMovies } from "../utils/moviesSlice"


const useUpcoming=()=>{
    const dispatch =useDispatch()

  const getPopularPlaying=async ()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    const data=await response.json()

    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(()=>{
    getPopularPlaying()
  },[])
}

export default useUpcoming