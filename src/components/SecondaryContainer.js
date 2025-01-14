import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store?.movie);


  return (
    movieList?.addNowPlayingMovies && (
      <div className="bg-black mb-10">
        <div className="relative z-20 -mt-[18%] w-full">
          {movieList?.addNowPlayingMovies && (<MovieList title="Now Playing" movieCards={movieList?.addNowPlayingMovies} /> )}
          {movieList?.addPopularMovies &&  (<MovieList title="Popular" movieCards={movieList?.addPopularMovies} /> )}
          {movieList?.addTopRatedMovies &&  (<MovieList title="Top Rated" movieCards={movieList?.addTopRatedMovies} /> )}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
