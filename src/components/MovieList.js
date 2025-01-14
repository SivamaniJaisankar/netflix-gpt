import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieCards }) => {
  
  return (
    <div className="px-4">
      <h4 className="text-white font-semibold text-xl my-4">{title}</h4>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movieCards?.map((card) => (
            <MovieCard key={card?.id} posterPath={card?.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
