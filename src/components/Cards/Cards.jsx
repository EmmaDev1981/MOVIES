import useNotiStackUtil from "../../hooks/useNotiStackUtil"
import Card from "../Card/Card"
import Loading from "../utils/Loading"
import "./Cards.css"

function Cards({ movies }) {

    let mensaje = movies?.Error || ""
    if (movies?.Error !== "undefined" && movies?.Error === 'Too many results.') {
        mensaje = "Demasiados resultados!!"
    } else if (movies?.Error !== "undefined" && movies?.Error === 'Incorrect IMDb ID.') {
        mensaje = "Nombre Incorrecto"
    } else if (movies?.Error !== "undefined" && movies?.Error === 'Movie not found!') {
        mensaje = "Pelicula no encontrada"
    }

    return (
        <div className="container">
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
                            <Loading type={"spokes"} color={"#ffffff"}/>
                        }
                    </div>
            }
        </div>
    )
}

export default Cards