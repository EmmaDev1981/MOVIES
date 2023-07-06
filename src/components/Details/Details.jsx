import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useApiCallById from '../../hooks/useApiCallById'
import './Details.scss'

function Details() {

  const details = useSelector((state) => state.movieDetails )
  const idMovieDetails = useSelector((state) => state.idMovie)

  const apiCallById = useApiCallById(idMovieDetails)

  const navigate = useNavigate()

  return (
    <>
      {
        details ?
          <div className="container py-4">
            <article className="postcard dark blue">
              <a className="postcard__img_link" href="#">
                <img className="postcard__img" src={details.Poster} alt="Image Title" />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue"> {details.Title}</h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>{`Año: ${details.Year}`}
                  </time>
                  <i className="fas fa-calendar-alt mr-2"></i>{`Director: ${details.Director}`}
                </div>
                <div className="postcard__bar"></div>
                {details.Plot}
                <ul className="postcard__tagbox">
                  <li className="tag__item" onClick={() => navigate('/')}><i className="fas fa-tag mr-2"></i>Back</li>
                  <li className="tag__item"><i className="fas fa-clock mr-2"></i>{`Duración: ${details.Runtime}`}</li>
                  <li className="tag__item"><i className="fas fa-clock mr-2"></i>{`Rated: ${details.Rated}`}</li>
                </ul>
              </div>
            </article>
          </div>
          :
          <h3>Cargando....</h3>
      }
    </>
  )
}

export default Details