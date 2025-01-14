import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoId }) => {
  const trailerInfo = useSelector((store) => store?.movie?.addMovieTrailer);
  useMovieDetails(videoId);

  return (
    <div>
      <iframe
        className="w-full aspect-video -mt-[3%]"
        src={`https://www.youtube.com/embed/${trailerInfo?.key}?rel=0&amp;autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
