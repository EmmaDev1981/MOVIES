import React, {useState, useCallback} from 'react'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import useApiCall from "../../hooks/useApiCall"
import { setMovieSearchName } from '../Store/slices/moviesSlices'
import {useDispatch, useSelector} from 'react-redux'
import './Search.scss'

function Search() {

  const dispatch = useDispatch()

    const nameInput = useCallback((inputElement) => {
      if (inputElement) {
        inputElement.focus();
      }
    }, []);

  const movieNameSearch = useSelector((state) => state.reducer.movieSearchName )
  const [dataCall, setDataCall] = useState({
    movieName: ""
  })
  
  const handleMovieSearch = (e) => {
    setDataCall({...dataCall, movieName: e.target.value })
  }
  
  const handleClick = () => {
    dispatch(setMovieSearchName(dataCall.movieName))
    setDataCall({
      movieName: ""
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(setMovieSearchName(dataCall.movieName))
    setDataCall({
      movieName: ""
    })
}
}

  const apiCall = useApiCall(movieNameSearch)

  return (
    <div className='div-container-search'>
      <div className="form__group field">
        <input ref={nameInput} onKeyDown={handleKeyDown} type='input' className="form__field" id='name' autoComplete="off" placeholder='a' onChange={handleMovieSearch} value={dataCall.movieName} />
        <label htmlFor="name" className="form__label">Busca tu pelicula...</label>
      </div>
      <div className="container-button-search">
      <Button sx={{ color: 'red' }} variant="outlined" onClick={handleClick} startIcon={<SearchIcon style={{ color: 'red' }} />}>
        Buscar
      </Button>
      </div>
    </div>

  )
}

export default Search