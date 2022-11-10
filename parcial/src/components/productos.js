import { useEffect, useState } from "react"
import axios from "axios"
import Producto from "./producto";

function Item(props){

    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        getProductos()
    },[])

    const getProductos = async () => {
        var { data } = await axios.get('http://127.0.0.1:1802/api/productos');
        setProductos(data.producto);
    }

    return(
        <section className="container products" id="productsSection">
            {productos.map(producto=>(
                <Producto
                    key={producto._id}
                    id={producto._id}
                    nombre={producto.nombre}
                    description={producto.descripcion}
                    marca={producto.marca}
                    precio={producto.precio}
                    descuento={producto.descuento}
                    uri={producto.uri}
                    user={props.user}
                />
            ))}
        </section>
    )
}

export default Item