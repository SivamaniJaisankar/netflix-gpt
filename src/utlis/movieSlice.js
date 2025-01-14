import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    addNowPlayingMovies: null,
    addPopularMovies: null,
    addTopRatedMovies: null,
    addMovieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.addMovieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addMovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;
