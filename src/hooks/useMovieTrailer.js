import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useMovieTrailer=(id)=>{
    const dispatch=useDispatch()

    const trailerData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
        const data = await response.json()

        const filterData = data?.results.filter((item) => item.type == "Trailer")

        const trailer = filterData.length ? filterData[0] : data.results[0]
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        trailerData()
    }, [])
}

export default useMovieTrailer