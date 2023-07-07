import React from 'react'
import Button from '../utils/Button'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./Card.scss"

function Card({Title, Poster, Year, imdbID}) {
  
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
            <li className="tag__item" >Favorite</li>
            <li className="tag__item"><Button imdbID={imdbID}/></li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default Card