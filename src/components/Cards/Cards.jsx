import useNotiStackUtil from "../../hooks/useNotiStackUtil"
import Card from "../Card/Card"
import Loading from "../utils/Loading"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector} from "react-redux"
import {addMoreMovies} from '../Store/slices/moviesSlices'

function Cards({ movies }) {

    const dispatch = useDispatch()
    const movieName = useSelector((state) => state.reducer.movieSearchName )
    const movieError = useSelector((state) => state.reducer.movies)
    const [page, setPage] = useState(2)


    let mensaje = movies?.Error || ""
    if (movies?.Error !== "undefined" && movies?.Error === 'Too many results.') {
        mensaje = "Demasiados resultados!!"
    } else if (movies?.Error !== "undefined" && movies?.Error === 'Incorrect IMDb ID.') {
        mensaje = "Nombre Incorrecto"
    } else if (movies?.Error !== "undefined" && movies?.Error === 'Movie not found!') {
        mensaje = "Pelicula no encontrada"
    }




    const handleAddMoreMovies = async () => {
        const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&plot=full&page=${page}&apikey=${import.meta.env.VITE_API_KEY}`);
        dispatch(addMoreMovies(response.data.Search))
        setPage(page + 1)
    }

    return (
        <div className="container">
            <>

                {
                    movies?.Error
                        ?
                        <div>
                            {
                                useNotiStackUtil(mensaje, "error")
                            }
                        </div>
                        :
                        <div className="container-movies">
                            {
                                movies ? movies?.Search?.map((movie, index) => {
                                    return (

                                        <Card key={index} {...movie} />

                                    )
                                }) :
                                    <Loading type={"spokes"} color={"#ffffff"} />
                            }
                        </div>
                }
                <Stack direction="row" spacing={2} sx={{justifyContent: 'center', mb: 5}}>
                    <Button 
                    variant="contained" 
                    color="success"
                    onClick={handleAddMoreMovies}
                    style={{ display: movieError?.Response === 'False' ? 'none' : null }}
                    >
                        Cargar Mas
                    </Button>
                </Stack>
            </>
        </div>
    )
}

export default Cards