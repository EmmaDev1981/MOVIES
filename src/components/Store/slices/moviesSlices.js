import { createSlice } from '@reduxjs/toolkit'

export const moviesSlices = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieSearchName:"star wars",
    idMovie: 0,
    movieDetails:null
  },
  reducers: {
    getAllMovies: (state, action) => {
      state.movies = action.payload
    },
    getIdMovie: (state, action) => {
      state.idMovie = action.payload
    },
    getMovieDetails: (state, action) => {
      state.movieDetails = action.payload
    },
    setMovieSearchName: (state, action) => {
      state.movieSearchName = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getAllMovies, getIdMovie, getMovieDetails, setMovieSearchName } = moviesSlices.actions

export default moviesSlices.reducer