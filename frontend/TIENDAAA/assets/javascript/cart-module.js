import { products } from './products.js';

/*Get from localstorage or create an empty array*/
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export const cartNumberNavbar = document.getElementById('cart-span');

/*Update localstorage*/
const updateLS = () => {
	localStorage.setItem('cart', JSON.stringify(cart));
};

/*Add item to cart*/
export const addItem = (id) => {
	if (cart.some((product) => product.id === id)) {
		/*Already exists*/
		const index = cart.findIndex((product) => product.id === id);
		cart[index].onCart++;
	} else {
		/*Adds the product*/
		const product = products.filter((product) => product.id === id)[0];
		product.onCart = 1;
		cart.push(product);

		// Update cart number on navbar
		cartNumberNavbar.textContent = cart.length;
	}

	updateLS();
};

/*Remove item from cart*/
export const removeItem = (id) => {
	const updated = cart.filter((product) => product.id !== parseInt(id));
	cart = updated;

	updateLS();
};

/*Updata item amount on cart*/
export const updateItem = (id, amount) => {
	const updated = cart.map((item) => {
		if (item.id === id) {
			item.onCart = amount;
		}

		return item;
	});

	cart = updated;
	updateLS();
};
