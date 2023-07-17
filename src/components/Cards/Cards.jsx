import useNotiStackUtil from "../../hooks/useNotiStackUtil"
import "./Cards.css"
import Card from "../Card/Card"

function Cards({movies}) {

    var mensaje = movies.Error || ""
    if(movies.Error !== "undefined" && movies.Error === 'Too many results.') {
        mensaje = "Demasiados resultados!!"
    } else if(movies.Error !== "undefined" && movies.Error === 'Incorrect IMDb ID.'){
        mensaje = "Nombre Incorrecto"
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
                                <p>Cargando...</p>
                        }
                    </div>
            }
        </div>
    )
}

export default Cards