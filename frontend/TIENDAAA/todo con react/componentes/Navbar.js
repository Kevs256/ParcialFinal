import '../../assets/css/style.css'
import React from 'react'

const navbar = ({}) =>{
    return(
        <nav className="navigation container">
		<a href="./index.html">
			<img src="../assets/images/logo.jpg" alt="Eco-tienda buena vida logo" className="navigation__logo" />
		</a>
		<div className="navigation-to-right">

			<form action="./search.html" className="navigation__search">
				<input type="text" name="search-criteria" id="search-criteria"
					placeholder="¿Qué producto estás buscando...?" />

				<img className="navigation__search-icon" src="../assets/icons/search.svg" alt="Search icon" />
			</form>

			<ul className="navigation__options">
				<li className="navigation__item">
					<a href="#">
						<div className="navigation__option">
							<img src="../assets/icons/heart-border-green.svg" alt="Favorites icon" />
							<p>Mis favoritos</p>
						</div>
					</a>
				</li>
				<li className="navigation__item dropdown__parent" id="my-account">
					<a href="#">
						<div className="navigation__option">
							<img src="../assets/icons/person-border-green.svg" alt="Account icon" />
							<p>Mi cuenta</p>
						</div>
					</a>

					<ul className="account__options dropdown__child" id="my-account-dropbox">
						<li className="account__option">
							<a href="#">
								<img src="../assets/icons/person-fill-black.svg" alt="Account icon" />Mi cuenta
							</a>
						</li>
						<li className="account__option">
							<a href="#"><img src="../assets/icons/heart-border-black.svg" alt="Favorites icon" />
								Mis favoritos
							</a>
						</li>
						<li className="account__option">
							<a href="./cart.html">
								<img src="../assets/icons/check-black.svg" alt="Cart icon" />Mi
								carrito
							</a>
						</li>
						<li className="account__option">
							<a href="./login.html">
								<img src="../assets/icons/lock-black.svg" alt="Log-in icon" />Entrar
                                </a>
						</li>
						<li className="account__option">
							<a href="./signup.html"><img src="../assets/icons/person-plus-black.svg"
									alt="Sign-up icon" />Crear una cuenta</a>
						</li>
					</ul>
				</li>
				<li className="navigation__item" id="my-cart">
					<a href="#">
						<div className="navigation__option">
							<img src="../assets/icons/basket-border-green.svg" alt="Cart icon" />
							<p>Mi carrito</p>
						</div>
						<span id="cart-span">3</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
    )
}

export default navbar