import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addTopRatedMovies } from "../utils/moviesSlice"


const useTopRated = () => {
  const dispatch = useDispatch()


  const getPopularPlaying = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    const data = await response.json()

    dispatch(addTopRatedMovies(data.results))
  }

  useEffect(() => {
    getPopularPlaying()
  }, [])
}

export default useTopRated