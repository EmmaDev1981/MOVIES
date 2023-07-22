import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useApiCallById from '../../hooks/useApiCallById'
import Loading from '../utils/Loading'
import Rating from '../utils/Rating/Rating'
import './Details.scss'

function Details() {

  const details = useSelector((state) => state.reducer.movieDetails )
  const idMovieDetails = useSelector((state) => state.reducer.idMovie)

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
                <h1 className="postcard__title blue p-3"> {details.Title}</h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>{`Year: ${details.Year}`}
                  </time>
                  <i className="fas fa-calendar-alt mr-2"></i>{`Director: ${details.Director}`}
                </div>
                <div className="postcard__bar"></div>
                   <p className="postcard__Plot">{details.Plot}</p>
                   {/* <Rating value={details.imdbRating}/> */}
                <ul className="postcard__tagbox">
                  <li className="tag__item">{`RunTime: ${details.Runtime}`}</li>
                  <li className="tag__item">{`Rated: ${details.Rated}`}</li>
                  <li className="tag__item">{`Released: ${details.Released}`}</li>
                  <li className="tag__item">{`Genre: ${details.Genre}`}</li>
                  <li className="tag__item">{`Writer: ${details.Writer}`}</li>
                  <li className="tag__item">{`Actors: ${details.Actors}`}</li>
                  <li className="tag__item">{`Language: ${details.Language}`}</li>
                  <li className="tag__item">{`Country: ${details.Country}`}</li>
                  <li className="tag__item">{`Awards: ${details.Awards}`}</li>
                  <li className="tag__item">{`Rating: ${details.imdbRating}`}</li>
                  <li className="tag__item">{`Type: ${details.Type}`}</li>
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