import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieLogo } from "../utils/moviesSlice";

const useMovieLogo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieLogos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/images",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filteredLogo = json.logos.filter((logo) => {
      return logo.iso_639_1 === "en" && logo.file_path.endsWith(".png");
    });
    dispatch(addMovieLogo(filteredLogo));
  };

  useEffect(() => {
    getMovieLogos();
  }, [movieId]);
};

export default useMovieLogo;
