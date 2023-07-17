import React from 'react'
import { getIdMovie } from '../Store/slices/moviesSlices'
import {useNavigate} from "react-router-dom"
import {useDispatch} from 'react-redux'

function Button({imdbID}) {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickDetails = (id) => {
        dispatch(getIdMovie(id))
        navigate('/details')
    }

  return (
    <a onClick={() => handleClickDetails(imdbID)}>Detalles</a>
  )
}

export default Button