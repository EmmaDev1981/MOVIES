import React from 'react'
import Button from '../utils/Button'
import { useDispatch, useSelector } from 'react-redux'
import {setFavoriteMovie, setCompareMovies} from '../Store/slices/moviesSlices'
import useNotiStackUtil from '../../hooks/useNotiStackUtil'
import axios from 'axios'
import noImage from '../../assets/no image.jpg'
import "./Card.scss"

function Card({Title, Poster, Year, imdbID}) {

  const dispatch = useDispatch()
  const movies = useSelector((state) => state.reducer.movies )
  const favMovies = useSelector((state) => state.reducer.favorites )
  const compMovies = useSelector((state) => state.reducer.compareMovies )
  const idCompaSelected = compMovies?.map((movie) => movie?.imdbID)
  const idFavSelected = favMovies?.map((movie) => movie?.imdbID)

  const handleFavoriteAdd = async (id) => {
    if(Array.isArray(movies?.Search)){
      if(idFavSelected.includes(id)) return
      const movieFav = movies?.Search?.filter((movie) => movie?.imdbID === id )
      dispatch(setFavoriteMovie(movieFav[0]))
      useNotiStackUtil("Pelicula agregada a Favoritos", "success")
    }
  }

  const handleCompareMovie = async (id) => {
    if(Array.isArray(movies?.Search)) {
      if(idCompaSelected.includes(id))return
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&plot=full&page=1&apikey=${import.meta.env.VITE_API_KEY}`)
      dispatch(setCompareMovies(response.data))
      useNotiStackUtil("Pelicula agregada a Comparar", "success")
    }
  }
  
  return (
    <div className="container py-4">
      <article className="postcard dark blue">
        <a className="postcard__img_link" href={Poster} target='_blank'>
          <img className="postcard__img" src={Poster !== 'N/A'? Poster : noImage} alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue"> {Title}</h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2"></i>{`Año: ${Year}`}
            </time>
          </div>
          <div className="postcard__bar"></div>
          <ul className="postcard__tagbox">
            <li className="tag__item" onClick={() => {handleFavoriteAdd(imdbID)}}>Agregar a Favoritos</li>
            <li className="tag__item" onClick={() => {handleCompareMovie(imdbID)}}>Comparar Pelicula</li>
            <li className="tag__item"><Button imdbID={imdbID}/></li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default Card