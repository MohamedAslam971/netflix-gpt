import React from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({movieId}) => {

    const getMovieVideos =async()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/950396/videos?language=en-US', API_OPTIONS);
         const json = data.json();
    }


  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground;