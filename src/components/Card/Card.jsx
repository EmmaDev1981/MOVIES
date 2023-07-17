import React from 'react'
import Button from '../utils/Button'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import {setFavoriteMovie} from '../Store/slices/moviesSlices'
import 'react-loading-skeleton/dist/skeleton.css'
import useNotiStackUtil from '../../hooks/useNotiStackUtil'
import "./Card.scss"

function Card({Title, Poster, Year, imdbID}) {

  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies )
  const favMovies = useSelector((state) => state.favorites )
  const idFavSelected = favMovies.map((movie) => movie.imdbID)

  const handleFavoriteAdd = (id) => {
    if(Array.isArray(movies.Search)){
      if(idFavSelected.includes(id)) return
      const movieFav = movies.Search.filter((movie) => movie.imdbID === id )
      dispatch(setFavoriteMovie(movieFav[0]))
      useNotiStackUtil("Pelicula agregada a Favoritos", "success")
    }
  } 
  
  return (
    <div className="container py-4">
      <article className="postcard dark blue">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src={Poster} alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue"> {Title || <Skeleton />}</h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2"></i>{`Año: ${Year || <Skeleton />}`}
            </time>
          </div>
          <div className="postcard__bar"></div>
          <ul className="postcard__tagbox">
            <li className="tag__item" onClick={() => {handleFavoriteAdd(imdbID)}}>Add Favorite</li>
            <li className="tag__item"><Button imdbID={imdbID}/></li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default Card