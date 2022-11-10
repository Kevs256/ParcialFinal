import { products, filterProdutsByPrice, filterProdutsByText } from './products.js';
import { replaceScreenProduct } from './pagination.js';

/* Aside filter */
const asideForm = document.getElementById('aside-filter');
const priceRange = document.getElementById('price-range');
const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const searchCriteria = document.getElementById('search-criteria'); // Navbar searchbar

/*Get search parameter (as needed)*/
const url = document.URL;
const parameterIndex = url.search(/search-criteria=/);
const query = url.substring(parameterIndex, url.length);
searchCriteria.value = query.split('=')[1].replaceAll('+', ' ');

// Min price
export let min_price = Infinity;
export let max_price = -Infinity;

// Get min and max price from products array
for (let i = 0; i < products.length; i++) {
	min_price = Math.min(
		min_price,
		parseFloat(products[i].price.substring(0, products[i].price.length - 2).replace(',', '.')),
	);
	max_price = Math.max(
		max_price,
		parseFloat(products[i].price.substring(0, products[i].price.length - 2).replace(',', '.')),
	);
}

/* #### #### #### #### ####
Aside filter (price)
#### #### #### #### ####*/

// Set properties
priceRange.min = Math.floor(min_price);
priceRange.max = Math.ceil(max_price);

/*Set min and max attribute on inputs*/
fromInput.min = priceRange.min;
toInput.max = priceRange.max;

/*Default values on filters*/
priceRange.value = Math.floor(min_price);
fromInput.value = fromInput.min;
toInput.value = Math.ceil(max_price);

priceRange.addEventListener('input', (e) => {
	// Round to integer
	e.target.value = Math.floor(e.target.value);

	/*Update from input*/
	fromInput.value = e.target.value;

	/* Filter products by price */
	const filteredProducts = filterProdutsByPrice(
		fromInput.value,
		toInput.value,
		filterProdutsByText(searchCriteria.value),
	);
	replaceScreenProduct(filteredProducts);
});

asideForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// Validate min and max values
	fromInput.value = priceRange.value = Math.floor(Math.max(fromInput.value, min_price));
	toInput.value = Math.ceil(Math.min(toInput.value, max_price));

	// Update view
	const filteredProducts = filterProdutsByPrice(
		fromInput.value,
		toInput.value,
		filterProdutsByText(searchCriteria.value),
	);
	replaceScreenProduct(filteredProducts);
});

/* #### #### #### #### ####
Navbar search bar (criteria)
#### #### #### #### ####*/

searchCriteria.addEventListener('input', (e) => {
	const filteredProducts = e.target.value !== '' ? filterProdutsByText(e.target.value) : products;
	replaceScreenProduct(filteredProducts);
});

/*Search on load*/
if (searchCriteria.value) {
	const filteredProducts = filterProdutsByText(searchCriteria.value);
	replaceScreenProduct(filteredProducts);
}
