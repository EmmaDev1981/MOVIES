import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux"
import {getAllMovies} from "../components/Store/slices/moviesSlices"

function useApiCall(movieName, page=1) {

    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const dispatch = useDispatch()

    async function fetchApi() {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&plot=full&page=${page}&apikey=${import.meta.env.VITE_API_KEY}`);
            setData(response.data)
            dispatch(getAllMovies(response.data))
            console.log(response.data)
            setLoading(false)
        }
        catch (e) {
            console.error(e)
            setError(e)
        }
    }

    useEffect(() => {
        fetchApi()
    },[movieName])

    return {data, error, loading}
}
export default useApiCall;