import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg opacity-50 ">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>Play</span>
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl rounded-lg opacity-50">More Info</button>
      </div>
      
    </div>
  );
};

export default VideoTitle;
