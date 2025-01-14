import React from "react";
import { MOVIE_POSTER } from "../utlis/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-56 pr-4">
      <img alt="Movie Poster" src={MOVIE_POSTER + posterPath} />
    </div>
  );
};

export default MovieCard;
