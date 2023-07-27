import { createSlice } from '@reduxjs/toolkit'

export const moviesSlices = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieSearchName:"star wars",
    idMovie: 0,
    movieDetails:null,
    favorites: [],
    compareMovies: [],
  },
  reducers: {
    getAllMovies: (state, action) => {
      state.movies = action.payload
    },
    addMoreMovies: (state, action) => {
      state.movies.Search = [...state.movies.Search, ...action.payload]
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
    },
    setCompareMovies: (state, action) => {
      state.compareMovies = [...state.compareMovies, action.payload]
    },
    removeFavoriteCompareMovies: (state, action) => {
      console.log(action.payload)
      state.compareMovies = state.compareMovies.filter(({Title}) => !action.payload.includes(Title));
    },
  }
})

export const { 
  getAllMovies, 
  getIdMovie, 
  getMovieDetails, 
  setMovieSearchName, 
  setFavoriteMovie, 
  removeFavoriteMovie, 
  setCompareMovies,
  removeFavoriteCompareMovies ,
  addMoreMovies
} = moviesSlices.actions

export default moviesSlices.reducer