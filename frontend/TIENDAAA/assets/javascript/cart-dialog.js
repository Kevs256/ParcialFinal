import { cart, removeItem, updateItem, cartNumberNavbar } from './cart-module.js';

/**
 * Update cart dialog
 * @param {HTMLElement} cartList HTML ul element reference
 * @param {HTMLElement} cartModal HTML container element reference
 */
export const updateCartDialog = (cartList, cartModal) => {
	// Update header
	const cartHeaderTitle = document.getElementsByClassName('cart-modal__title')[0];
	cartHeaderTitle.textContent = `Mi carrito (${cart.length})`;

	// Reset actual content on modal
	cartList.innerHTML = '';

	// Update cart number on navbar
	cartNumberNavbar.textContent = cart.length;

	cart.map((item) => {
		cartList.innerHTML += `
			<li class="cart-modal__item">
				<div class="cart-modal__row">
					<img
						src="../assets/images/${item.id}.jpg"
						alt="${item.item} image"
						class="cart-modal__image"
					/>
					<div class="cart-modal__data">
						<h3>${item.item}</h3>
						<p class="cart-modal__included-amount">${item.amount}</p>
						<div class="wrapper">
							<div class="input-group">
								<label for="${item.id}-in-cart">Cantidad: </label>
								<input type="number" name="${item.id}-in-cart" id="${item.id}-in-cart" value="${item.onCart}" />
							</div>
							<p class="cart-modal__price">${item.price}</p>
						</div>
					</div>
				</div>
			</li>
		`;

		// Listen change event on all inputs
		const inputs = document.querySelectorAll('.cart-modal__data .wrapper .input-group input');
		inputs.forEach((input) =>
			input.addEventListener('change', (e) => {
				updateItem(parseInt(e.target.id.split('-')[0]), parseInt(e.target.value));
				updateCartDialog(cartList, cartModal);
			}),
		);

		// Close icon for each rhow
		const closeIcon = document.createElement('img');
		closeIcon.src = '../assets/icons/x-square-fill-green.svg';
		closeIcon.alt = `Remove ${item.item} from cart`;
		closeIcon.dataset.id = item.id;
		closeIcon.classList.add('cart-row__delete');
		cartList.lastElementChild.appendChild(closeIcon); // Add icon on the new row
	});

	// Update all buttons click event
	document.querySelectorAll('.cart-row__delete').forEach((button) =>
		button.addEventListener('click', (e) => {
			removeItem(e.target.dataset.id); // Call cart-dialog.js module function
			updateCartDialog(cartList);
		}),
	);

	let subtotal = 0;
	let total = 0;

	// Total and subtotal values
	if (cart.length !== 0) {
		for (let i = 0; i < cart.length; i++) {
			subtotal +=
				parseFloat(cart[i].price.substring(0, cart[i].price.length - 2).replace(',', '.')) *
				cart[i].onCart;
		}

		subtotal = subtotal.toFixed(2); // Fix to 2 decimals
		total = (subtotal * 1.19).toFixed(2); // Add IVA

		// Replace with actual values
		document.getElementById('cart-modal__subtotal-value').textContent = `${subtotal} €`;
		document.getElementById('cart-modal__total-value').textContent = `${total} €`;
	} else {
		// Remove actual value
		document.getElementById('cart-modal__subtotal-value').textContent = '0 €';
		document.getElementById('cart-modal__total-value').textContent = '0 €';
	}

	// Free shipping message
	if (total >= 50) {
		document.getElementById('cart-modal__free-ship').textContent = `
			Tu compra aplica para envío gratuito.
		`;
	} else {
		document.getElementById('cart-modal__free-ship').textContent = `
			Te faltan ${(50 - total).toFixed(2)}€ para disfrutar del envío gratuito
		`;
	}
};
