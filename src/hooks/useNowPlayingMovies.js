import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/constants";
import { addNowPlayingMovies } from "../utlis/movieSlice";
import { GET_NOW_PLAYING_MOVIES } from "../utlis/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(GET_NOW_PLAYING_MOVIES, API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
