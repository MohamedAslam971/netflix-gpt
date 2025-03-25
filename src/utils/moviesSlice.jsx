import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
        movieLogo : null,
    },
    reducers: {
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies =action.payload;
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo =action.payload;
        },
        addMovieLogo:(state, action) =>{
            state.movieLogo =action.payload;
        },
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addMovieLogo} = moviesSlice.actions;

export default moviesSlice.reducer;