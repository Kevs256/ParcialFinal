import NavbarPropio from "../components/navbar";
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import {useState, useEffect} from 'react';

const Cart = () =>{

    const user = useAuth();

    const [carrito, setCarrito] = useState({});

    const handelGetCarrito = async ()=>{
        if(user){
            var {data} = await axios.get(`http://127.0.0.1:1802/api/user/${user.id}/carrito`);
            console.log(data);
            setCarrito(data);
        }
    }

    useEffect(()=>{
        handelGetCarrito();
    }, [user]);

    return(
        <div className='cart'>
            <h1 className="title">Esta es tu cesta de la compra</h1>
            <div className="container cart-layout">
                <section className="cart-items">
                    <h2 className="subtitle" id="cart-items-title">x Artículos:</h2>
                    <ul className="cart-items__list"></ul>
                </section>
                <section className="cart-totals">
                    <h2 className="subtitle">Resumen de tu pedido:</h2>
                    <div className="cart-totals__row">
                        <p>Subtotal:</p>
                        <p>${carrito.precio} €</p>
                    </div>
                    <div className="cart-totals__row cart-totals__row--bold">
                        <p>Total:</p>
                        <p>${carrito.precio_total} €</p>
                    </div>
                    <p className="cart-totals__ship">$</p>
                    <button className="btn btn--block btn--green">Realizar pedido</button>
                    <a className="cart-totals__redirection" href="./index.html">Quieres agregar mas productos?</a>
                </section>
            </div>
        </div>
    )
}

export default Cart