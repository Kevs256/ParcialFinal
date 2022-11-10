/* 
#### #### #### #### #### 
This file control dropdown menus, dialogs and also
the events related to search bar
#### #### #### #### ####
*/

import { cart, cartNumberNavbar } from './cart-module.js';
import { updateCartDialog } from './cart-dialog.js';

/* Mi cuenta dropdown menu on navbar*/
const myAccountNavbar = document.getElementById('my-account');
const myAccountNavbarDropdown = document.getElementById('my-account-dropbox');

/* Mi carrito icon on navbar */
const myCartNavbar = document.getElementById('my-cart');
const cartModal = document.getElementsByClassName('cart-modal')[0]; // Container
const cartModalClose = document.getElementById('cart-modal__close');
const cartList = document.getElementById('cart-list'); // Ul elemente
const cartHeaderTitle = document.getElementsByClassName('cart-modal__title')[0];

/*Show my cart dialog on click*/
myCartNavbar.addEventListener('click', () => {
	//Toggle visibility
	cartModal.classList.toggle('cart-modal--active');

	if (cartModal.classList.contains('cart-modal--active')) {
		// Update header title
		cartHeaderTitle.textContent = `Mi carrito (${cart.length})`;

		// Include all the items on cart into the modal
		updateCartDialog(cartList, cartModal);
	}
});

cartModalClose.addEventListener('click', () => {
	cartModal.classList.remove('cart-modal--active');
});

cartNumberNavbar.textContent = cart.length;
