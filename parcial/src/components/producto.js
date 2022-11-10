
import axios from 'axios';

function producto(props){


    const handleAddCart = async ()=>{
        await axios.post(`http://127.0.0.1:1802/api/user/${props.user.id}/carrito`, {
            id_producto: props.id,
            cantidad: 1
        });
    }

    return(
        <article className="product" data-id={props._id}>
            <img className="product__image" alt="Parches Supertonificantes para Contorno de Ojos product image" src={`http://127.0.0.1:1802${props.uri}`}/>
            <h3 className="product__title">{props.nombre}</h3>
            <p className="product__amount">{props.precio}</p>
            <p className="product__price">{props.precio}</p>
            <img className="product__favorite" alt="Heart icon" src={require("../assets/icons/heart-border-red.svg").default}/>
            <button onClick={handleAddCart} className="btn btn--orange btn--block product__cart-button" data-product-id={props._id} type="button">
                <img alt="Add to cart icon" src={require("../assets/icons/basket3-fill-white.svg").default}/>Añadir a la canasta
            </button>
        </article>
    )
}

export default producto
