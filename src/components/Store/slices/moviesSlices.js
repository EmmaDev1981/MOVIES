import { createSlice } from '@reduxjs/toolkit'

export const moviesSlices = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieSearchName:"star wars",
    idMovie: 0,
    movieDetails:null,
    favorites: []
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
    },
    setFavoriteMovie: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFavoriteMovie: (state, action) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload)
    }
  }
})

export const { getAllMovies, getIdMovie, getMovieDetails, setMovieSearchName, setFavoriteMovie, removeFavoriteMovie } = moviesSlices.actions

export default moviesSlices.reducer