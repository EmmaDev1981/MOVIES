import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux"
import {getMovieDetails} from "../components/Store/slices/moviesSlices"

function useApiCallById(imdbId) {

    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const dispatch = useDispatch()

    async function fetchApi() {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${imdbId}&plot=full&page=1&apikey=${import.meta.env.VITE_API_KEY}`);
            setData(response.data)
            dispatch(getMovieDetails(response.data))
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