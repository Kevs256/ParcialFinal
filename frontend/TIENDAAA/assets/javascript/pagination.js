import { products, createProductCard } from './products.js';

const productsSection = document.getElementById('productsSection');
const pagination = document.getElementsByClassName('page-controllers')[0];
export let currentProducts = products; /*Default value when page loads*/

let actualPage = 1; // Default value
let actualActiveButton;
let lastPage = Math.ceil(currentProducts.length / 12);

export const updateScreenProducts = (page) => {
	productsSection.innerHTML = '';

	const initialIndex = 12 * (actualPage - 1);
	const finalIndex = initialIndex + 11;

	for (let i = initialIndex; i <= finalIndex; i++) {
		const productCard = createProductCard(products[i]);
		productsSection.appendChild(productCard);
	}
};

const updatePagination = () => {
	pagination.innerHTML = ''; /*Reset actual pagination*/

	/*Create previous button*/
	const previousButton = document.createElement('button');
	previousButton.type = 'button';
	previousButton.classList.add('page-controller');
	previousButton.textContent = '<';
	pagination.appendChild(previousButton);

	previousButton.addEventListener('click', () => {
		if (parseInt(pagination.firstChild.nextSibling.textContent) !== 1) {
			// Remove the last one
			pagination.lastChild.previousSibling.remove();

			// Creathe a new one
			const pageButton = document.createElement('button');
			pageButton.type = 'button';
			pageButton.classList.add('page-controller');
			pageButton.textContent = parseInt(pagination.firstChild.nextSibling.textContent) - 1;

			// Mark as active and navigate to the new products
			actualActiveButton.classList.remove('page-controller--active');
			pageButton.classList.add('page-controller--active');
			actualActiveButton = pageButton;
			actualPage = parseInt(pageButton.textContent);

			pagination.insertBefore(pageButton, pagination.firstChild.nextSibling);
			updateScreenProducts(actualPage);
		}
	});

	/*Add pages to pagination*/
	for (let i = 1; i <= Math.min(lastPage, 5); i++) {
		const pageButton = document.createElement('button');
		pageButton.type = 'button';
		pageButton.classList.add('page-controller');
		pageButton.textContent = i;

		if (i === actualPage) pageButton.classList.add('page-controller--active');

		if (i === 1) actualActiveButton = pageButton;

		pageButton.addEventListener('click', (e) => {
			actualActiveButton.classList.remove('page-controller--active');
			e.target.classList.add('page-controller--active');
			actualActiveButton = e.target;

			actualPage = parseInt(pageButton.textContent);
			updateScreenProducts(actualPage);
		});

		pagination.appendChild(pageButton);
	}

	/*Create next button*/
	const nextButton = document.createElement('button');
	nextButton.type = 'button';
	nextButton.classList.add('page-controller');
	nextButton.textContent = '>';
	pagination.appendChild(nextButton);

	nextButton.addEventListener('click', () => {
		if (parseInt(pagination.lastChild.previousSibling.textContent) !== lastPage) {
			// Remove the fist one
			pagination.firstChild.nextSibling.remove();

			// Creathe a new one
			const pageButton = document.createElement('button');
			pageButton.type = 'button';
			pageButton.classList.add('page-controller');
			pageButton.textContent = parseInt(pagination.lastChild.previousSibling.textContent) + 1;

			// Mark as active and navigate to the new products
			actualActiveButton.classList.remove('page-controller--active');
			pageButton.classList.add('page-controller--active');
			actualActiveButton = pageButton;
			actualPage = parseInt(pageButton.textContent);

			pagination.insertBefore(pageButton, pagination.lastChild);
			updateScreenProducts(actualPage);
		}
	});
};

export const replaceScreenProduct = (products) => {
	productsSection.innerHTML = '';
	currentProducts = products; /*Replace default value*/
	lastPage = Math.ceil(currentProducts.length / 12); /*Replace to current value*/

	for (let i = 0; i < Math.min(products.length, 12); i++) {
		const productCard = createProductCard(products[i]);
		productsSection.appendChild(productCard);
	}

	updatePagination();
};

// Show initial products when the page loads
updateScreenProducts(actualPage);

updatePagination(); // Update pagination on page load
