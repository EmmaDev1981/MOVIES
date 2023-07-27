import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux"
import {getMovieDetails, setCompareMovies} from "../components/Store/slices/moviesSlices"

function useApiCallById(imdbId, mode) {

    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const dispatch = useDispatch()

    async function fetchApi() {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${imdbId}&plot=full&page=1&apikey=${import.meta.env.VITE_API_KEY}`);
            setData(response.data)
            if(mode === "getMovieDetails") {
                dispatch(getMovieDetails(response.data))
            } else if ('mode === "setCompareMovies"') {
                dispatch(setCompareMovies(response.data))
            }
            setLoading(false)
        }
        catch (e) {
            console.error(e)
            setError(e)
        }
    }

    useEffect(() => {
        fetchApi()
    },[imdbId])

    return {data, error, loading}
}
export default useApiCallById;