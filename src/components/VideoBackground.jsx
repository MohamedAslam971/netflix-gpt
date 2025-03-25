import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailerVideo?.key);

  useMovieTrailer(movieId);
  return (
    <div className="w-full aspect-[16/9]">
      <iframe
      className="w-full h-full"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=f0ILgdhNlZFFEyRl&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
