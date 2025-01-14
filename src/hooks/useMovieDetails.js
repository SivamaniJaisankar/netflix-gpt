import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/constants";
import { addMovieTrailer } from "../utlis/movieSlice";

const useMovieDetails = (videoId) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const filteredTrailer = json.results.filter((v) => v.type === "Trailer");
    const filteredData = filteredTrailer ? filteredTrailer : json.results[0];

    dispatch(addMovieTrailer(filteredData[1]));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
