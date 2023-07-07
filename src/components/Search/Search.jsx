import React, {useState, useEffect} from 'react'
import useApiCall from "../../hooks/useApiCall"
import { setMovieSearchName } from '../Store/slices/moviesSlices'
import {useDispatch, useSelector} from 'react-redux'
import './Search.scss'
import ColorBadge from '../utils/ColorBadge'

function Search() {

  const dispatch = useDispatch()
  const movieNameSearch = useSelector((state) => state.movieSearchName )
  console.log(movieNameSearch)

  const [dataCall, setDataCall] = useState({
    movieName: ""
  })
  
  
  const handleMovieSearch = (e) => {
    // mejorar funcion de validar que buscan
    setDataCall({...dataCall, movieName: e.target.value })
  }
  
  const handleClick = () => {
    dispatch(setMovieSearchName(dataCall.movieName))
    setDataCall({
      movieName: ""
    })
  }

  const apiCall = useApiCall(movieNameSearch)

  return (
    <div className='div-container-search'>
    <ColorBadge />
      <div className="form__group field">
        <input type='input' className="form__field" id='name' autoComplete="off" placeholder='a' onChange={handleMovieSearch} value={dataCall.movieName} />
        <label htmlFor="name" className="form__label">Busca tu pelicula...</label>
      </div>
      <div className="container-button-search">
         <button className='button-search' onClick={handleClick}>Buscar</button>
      </div>
    </div>

  )
}

export default Search