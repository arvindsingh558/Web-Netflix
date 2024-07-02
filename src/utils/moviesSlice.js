import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovie=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovie=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovie=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies, addUpcomingMovies}=movieSlice.actions
export default movieSlice.reducer