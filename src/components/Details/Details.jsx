import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useApiCallById from '../../hooks/useApiCallById'
import Loading from '../utils/Loading'
import NavBar from '../NavBar/NavBar'
import noImage from '../../assets/no image.jpg'
import './Details.scss'

function Details() {

  const details = useSelector((state) => state.reducer.movieDetails )
  const idMovieDetails = useSelector((state) => state.reducer.idMovie)
  const apiCallById = useApiCallById(idMovieDetails, "getMovieDetails")
  const navigate = useNavigate()

  return (
    <>
    <NavBar/>
      {
        details ?
          <div className="container py-4">
            <article className="postcard dark blue">
              <a className="postcard__img_link" href={details.Poster} target='_blank'>
                <img className="postcard__img" src={details.Poster !== 'N/A' ? details.Poster : noImage } alt="Image Title" />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue p-3"> {details.Title}</h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>{`Año: ${details.Year}`}
                  </time>
                  <i className="fas fa-calendar-alt mr-2"></i>{`Director: ${details.Director}`}
                </div>
                <div className="postcard__bar"></div>
                   <p className="postcard__Plot">{details.Plot}</p>
                <ul className="postcard__tagbox">
                  <li className="tag__item">{`Duración: ${details.Runtime}`}</li>
                  <li className="tag__item">{`Puntaje: ${details.Rated}`}</li>
                  <li className="tag__item">{`Estreno: ${details.Released}`}</li>
                  <li className="tag__item">{`Genero: ${details.Genre}`}</li>
                  <li className="tag__item">{`Escritor: ${details.Writer}`}</li>
                  <li className="tag__item">{`Actores: ${details.Actors}`}</li>
                  <li className="tag__item">{`Languaje: ${details.Language}`}</li>
                  <li className="tag__item">{`Pais: ${details.Country}`}</li>
                  <li className="tag__item">{`Premios: ${details.Awards}`}</li>
                  <li className="tag__item">{`Rating: ${details.imdbRating}`}</li>
                  <li className="tag__item">{`Tipo: ${details.Type}`}</li>
                  <li className="tag__item">{`Recaudado: ${details.BoxOffice}`}</li>
                  <li className="tag__item__back" onClick={() => navigate('/')}>Back</li>
                </ul>
              </div>
            </article>
          </div>
          :
             <Loading type={"spokes"} color={"#ffffff"}/>
      }
    </>
  )
}

export default Details