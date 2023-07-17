import useNotiStackUtil from "../../hooks/useNotiStackUtil"
import {useDispatch, useSelector} from 'react-redux'
import {removeFavoriteMovie} from '../Store/slices/moviesSlices'
import Button from "../utils/Button"
import {useNavigate} from 'react-router-dom'

function Favorites() {

    const movies = useSelector((state) => state.favorites)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleFavoriteRemove = (id) => {
        dispatch(removeFavoriteMovie(id))
        console.log(movies.length)
        if(movies.length <= 1) {
            navigate('/')
        }
    }

    return (
        movies?.map((movie, index) => {
            return (
                <div key={index} className="container py-4">
                    <article className="postcard dark blue">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={movie.Poster} alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title blue"> {movie.Title}</h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{`Año: ${movie.Year}`}
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item" onClick={() => { handleFavoriteRemove(movie.imdbID) }}>Remove Favorite</li>
                                <li className="tag__item"><Button imdbID={movie.imdbID}/></li>
                            </ul>
                        </div>
                    </article>
                </div>
            )
            
        })

    )
}
export default Favorites