import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/constants";
import { addPopularMovies } from "../utlis/movieSlice";
import { GET_POPULAR_MOVIES } from "../utlis/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(GET_POPULAR_MOVIES, API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
