import React from "react";
import { useSelector } from "react-redux";
import useMovieLogo from "../hooks/useMovieLogo";

const VideoTitle = ({ title, overview, movieId }) => {
  const logo = useSelector((store) => store.movies?.movieLogo);

  useMovieLogo(movieId);

  console.log(logo?.length);
  if (!logo) return;

  const logoPath = logo?.length > 0 ? logo[1]?.file_path : logo[0]?.file_path;
  // const logoPath =logo[0].file_path;

  console.log(logoPath);

  return (
    <div className="w-full aspect-[16/9] pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <img
        className="w-4/12"
        src={"https://image.tmdb.org/t/p/original" + logoPath}
        alt="movieLogo"
      />
      {/* <h1 className="text-5xl font-bold w-4/12">{title}</h1> */}
      <p className="py-4 text-lg w-1/4">{overview}</p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white font-semibold p-4 px-12 text-xl rounded-lg  cursor-pointer text-black transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-105 active:scale-95">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>Play</span>
        </button>
        <button className="flex items-center font-semibold gap-2 bg-gray-400/50 p-4 px-12 text-xl rounded-lg  cursor-pointer text-white transition duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 active:scale-95">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
          </svg>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
