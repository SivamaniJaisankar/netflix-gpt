import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryContainer = () => {
  const movieList = useSelector((store) => store?.movie?.addNowPlayingMovies);
  if (movieList === null) return;
  const selectedMovie = movieList ? Object.values(movieList)[0] : null;

  const { id, title, overview } = selectedMovie;

  return (
    <div >
      <VideoTitle videoTitle={title} videoDescription={overview} />
      <VideoBackground videoId={id} /> 
    </div>
  );
};

export default PrimaryContainer;
