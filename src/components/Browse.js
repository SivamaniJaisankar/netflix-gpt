import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  
  return (
    <div>
      <BrowseHeader />
       <PrimaryContainer />
      <SecondaryContainer /> 
    </div>
  );
};

export default Browse;
