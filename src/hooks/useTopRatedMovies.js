import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/constants";
import { addTopRatedMovies } from "../utlis/movieSlice";
import { GET_TOP_RATED_MOVIES } from "../utlis/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
