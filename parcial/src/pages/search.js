import Precio from "../components/precio"
import Grilla from "../components/grilla"
import Productos from "../components/productos"
import useAuth from "../hooks/useAuth"

const Search = () =>{

    const user = useAuth();

    return(
        <div className='search'>
            <Precio></Precio>
            <Productos user={user}></Productos>
        </div>
    )
}

export default Search