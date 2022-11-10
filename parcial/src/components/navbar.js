import '../App.css';
import {useNavigate} from "react-router-dom";

function NavbarPropio (){

	const navigate = useNavigate();

    return(
        <div className="NavnarPropio">
			<nav className="navigation container">
				<button onClick={()=>{navigate('/')}}>
					<img src={require("../assets/images/logo.jpg")} alt="Eco-tienda buena vida logo" className="navigation__logo" />
				</button>
				<div className="navigation-to-right">
					<form action="./search" className="navigation__search">
						<input type="text" name="search-criteria" id="search-criteria"
							placeholder="¿Qué producto estás buscando...?" />
						<img className="navigation__search-icon" src={require("../assets/icons/search.svg").default} alt="Search icon" />
					</form>
					<ul className="navigation__options">
						<li className="navigation__item">
							<a href="#">
								<div className="navigation__option">
									<img src={require("../assets/icons/heart-border-green.svg").default} alt="Favorites icon" />
									<p>Mis favoritos</p>
								</div>
							</a>
						</li>
						<li className="navigation__item dropdown__parent" id="my-account">
							<a href="#">
								<div className="navigation__option">
									<img src={require("../assets/icons/person-border-green.svg").default} alt="Account icon" />
									<p>Mi cuenta</p>
								</div>
							</a>
							<ul className="account__options dropdown__child" id="my-account-dropbox">
								<li className="account__option">
									<a href="#">
										<img src={require("../assets/icons/person-fill-black.svg").default} alt="Account icon" />Mi cuenta
									</a>
								</li>
								<li className="account__option">
									<a href="#"><img src={require("../assets/icons/heart-border-black.svg").default} alt="Favorites icon" />
										Mis favoritos
									</a>
								</li>
								<li className="account__option">
									<a href="#">
										<img src={require("../assets/icons/check-black.svg").default} alt="Cart icon" />Mi
										carrito
									</a>
								</li>
								<li className="account__option">
									<a href="./login.html">
										<img src={require("../assets/icons/lock-black.svg").default} alt="Log-in icon" />Entrar</a>
								</li>
								<li className="account__option">
									<a href="./signup.html"><img src={require("../assets/icons/person-plus-black.svg").default}
											alt="Sign-up icon" />Crear una cuenta</a>
								</li>
							</ul>
						</li>
						<li className="navigation__item" id="my-cart">
							<button onClick={()=>{navigate('/cart')}}>
								<div className="navigation__option">
									<img src={require("../assets/icons/basket-border-green.svg").default} alt="Cart icon" />
									<p>Mi carrito</p>
								</div>
								<span id="cart-span">3</span>
							</button>
						</li>
					</ul>
				</div>
			</nav>
        </div>
    )
}

export default NavbarPropio