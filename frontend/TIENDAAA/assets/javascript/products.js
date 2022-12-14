import { addItem } from './cart-module.js';

/* Product details dialog */
export const productDetailsDialog = document.getElementsByClassName('product-modal')[0];

export const products = [
	{
		id: 1,
		item: 'Aceite esencial de Clavo',
		amount: '12ML',
		price: '7,99 €',
		annotations: '665,83 €/L',
		description:
			'El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.',
	},
	{
		id: 2,
		item: 'Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos',
		amount: '60UDS',
		price: '15,50 €',
		annotations: 'Sale a: 0,26 €/ud.',
		description:
			'Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.',
	},
	{
		id: 3,
		item: 'Parches Iluminadores para el Contorno de Ojos',
		amount: '60UDS',
		price: '15,50 €',
		annotations: 'Sale a: 0,26 €/ud.',
		description:
			'Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven. \n\nEstos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.',
	},
	{
		id: 4,
		item: 'Parches Supertonificantes para Contorno de Ojos',
		amount: '60UDS',
		price: '10,50 €',
		annotations: '',
		description:
			'Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante. \n\nEstos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.',
	},
	{
		id: 5,
		item: '6 Discos Desmaquillantes de Fibra Natural',
		amount: '6UDS',
		price: '10,50 €',
		annotations: 'Sale a: 1,75 €/ud.',
		description:
			'Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función: \n\nLimpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos. \n\nExfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas. \n\nIncluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora. \n\nReúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente.',
	},
	{
		id: 6,
		item: 'Aceite anticelulítico de abedul',
		amount: '100ML',
		price: '22,90 €',
		annotations: 'Sale a: 229,00 €/L',
		description:
			'El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.',
	},
	{
		id: 7,
		item: 'Aceite antiinflamatorio S.O.S Rescate',
		amount: '30ML',
		price: '12,45 €',
		annotations: 'Sale a: 415,00 €/L',
		description:
			'Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.',
	},
	{
		id: 8,
		item: 'Aceite Bucal de Coco Orgánico Premium',
		amount: '180ML',
		price: '9,60 €',
		annotations: 'Sale a: 53,33 €/L',
		description:
			'Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.',
	},
	{
		id: 9,
		item: 'Aceite corporal blanco siberiano anticelulítico de Natura Siberica',
		amount: '200ML',
		price: '6,95 €',
		annotations: 'Sale a: 34,75 €/L',
		description:
			'Este producto te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.',
	},
	{
		id: 10,
		item: 'Aceite corporal Body Sculptor',
		amount: '',
		price: '73,70 €',
		annotations: 'Sale a: 491,33 €/L',
		description:
			'Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.',
	},
	{
		id: 11,
		item: 'Aceite corporal de almendras dulces',
		amount: '500ML',
		price: '10,45 €',
		annotations: 'Sale a: 20,90 €/L',
		description:
			'El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.',
	},
	{
		id: 12,
		item: 'Aceite corporal de almendras dulces con dosificador 1L',
		amount: '1L',
		price: '14,99 €',
		annotations: 'Sale a: 14,99 €/L',
		description:
			'El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.',
	},
	{
		id: 13,
		item: 'Aceite corporal de almendras dulces con dosificador 500ml',
		amount: '500ML',
		price: '11,55 €',
		annotations: 'Sale a: 23,10 €/L',
		description:
			'El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.',
	},
	{
		id: 14,
		item: 'Aceite Corporal de Granada',
		amount: '100ML',
		price: '22,90 €',
		annotations: 'Sale a: 229,00 €/L',
		description:
			'El aceite corporal de granada es de acción antioxidante intensiva que sirve para la regeneración celula, reafirmando y mejorando la elasticidad. Está indicado para pieles secas, maduras y estresadas, pues ayuda a prevenir el envejecimiento prematuro de la piel. Con ingredientes 100% naturales y ecológicos, que otorgan un aroma sensual y dulce. Testado dermatológicamente, no testado en animales. Apto para veganos.',
	},
	{
		id: 15,
		item: 'Aceite Corporal de Rosa Mosqueta',
		amount: '100ML',
		price: '22,90 €',
		annotations: 'Sale a: 229,00 €/L',
		description:
			'La principal acción de la Rosa Mosqueta es la regeneración de la piel y elasticidad, aportando tonicidad a la piel. Combate los primeros signos de envejecimiento de la piel. Este producto combina la acción alisante de la rosa mosqueta con las propiedades hidratantes del aceite de jojoba. Da como resultado un aceite muy nutritivo, de una textura ligera y muy absorvente. Testado dermatológicamente en todo tipo de pieles, pero no en animales. Apto para veganos. De uso diario.',
	},
	{
		id: 16,
		item: 'Aceite corporal Embellecedor del Busto',
		amount: '',
		price: '81,70 €',
		annotations: 'Sale a: 817,00 €/L',
		description:
			'Aceite corporal empleado para moldear y realzar el busto dándole una apariencia de mayor volumen. Hidrata y nutre ayudando a prevenir las estrías de esta zona tan sensible. Utilízalo directamente con ligeros masajes circulares hasta su total absorción. Puedes utilizarlo de forma diaria, para mejores resultados te aconsejamos de dos a tres aplicaciones al día.',
	},
	{
		id: 17,
		item: 'Aceite corporal Reafirmante de Tejidos',
		amount: '',
		price: '60,00 €',
		annotations: 'Sale a: 400,00 €/L',
		description:
			'Aceite corporal indispensable para prevenir la pérdida de firmeza de los tejidos y reafirmar las zonas que presentan flacidez. Puedes hidratar tu cuerpo de forma diaria con este aceite y beneficiarte de sus propiedades reafirmantes. Con ingredientes totalmente naturales consigue una hidratación en las capas profundas de la piel.',
	},
	{
		id: 18,
		item: 'Aceite corporal Reafirmante del Busto',
		amount: '',
		price: '81,70 €',
		annotations: 'Sale a: 817,00 €/L',
		description:
			'Aceite corporal específico de tratamiento que reafirma eficazmente el seno caído a la vez que hidrata y suaviza la piel devolviéndole su belleza. El tratamiento natural con este aceite realza el busto para que se muestre más bello. Este aceite está libre de hormonas y otros componentes químicos, se basa en ingredientes naturales con propiedades hidratantes y estimuladoras.',
	},
	{
		id: 19,
		item: 'Aceite corporal Reina de Egipto',
		amount: '',
		price: '57,30 €',
		annotations: 'Sale a: 382,00 €/L',
		description:
			'Aceite corporal de exótica fragancia que nutre en profundidad, combate el envejecimiento cutáneo, regenera y alisa, a la vez que aporta autoestima y confianza. Este aceite es muy usado y recomendado entre nuestros clientes gracias a su versatilidad y eficacia.',
	},
	{
		id: 20,
		item: 'Aceite daúrico corporal de Natura Siberica',
		amount: '',
		price: '18,95 €',
		annotations: 'Sale a: 51,22 €/L',
		description:
			'Relaja tu cuerpo con este fantástico producto con el que podrás disfrutar de momentos únicos. Aceite daúrico corporal es perfecto para pieles secas. Una explosión de sensaciones gracias a su composición que revitalizará tu piel.',
	},
	{
		id: 21,
		item: 'Aceite de Aguacate corporal',
		amount: '125ML',
		price: '15,00 €',
		annotations: 'Sale a: 120,00 €/L',
		description:
			'El aceite de aguacate actúa un bálsamo perfecto para la piel. Destaca por su efecto nutritivo, protector y regenerante. Indicado para pieles secas, agrietadas y envejecidas. Tiene una excelente penetración y además ayuda a filtrar de forma natural la radiación solar.',
	},
	{
		id: 22,
		item: 'Aceite de almendras corporal Bio',
		amount: '125ML',
		price: '14,95 €',
		annotations: 'Sale a: 119,60 €/L',
		description:
			'Hidrata y nutre tu piel con este aceite de almendras ecológico de primera prensada en frío. Te recomendamos su uso después de la ducha con la piel húmeda, mejora su absorción. Puedes utilizarlo de base para formularlo con otro aceites, aceites esenciales y lociones.',
	},
	{
		id: 23,
		item: 'Aceite de Argán Bio',
		amount: '30ML',
		price: '12,99 €',
		annotations: '12,99 €',
		description:
			'Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.',
	},
	{
		id: 24,
		item: 'Aceite de Argán Bio',
		amount: '100ML',
		price: '25,95 €',
		annotations: 'Sale a: 259,50 €/L',
		description:
			'Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.',
	},
	{
		id: 25,
		item: 'Aceite de CBD 5%',
		amount: '15ML',
		price: '20,95 €',
		annotations: 'Sale a: 20,95 €/ud.',
		description:
			'Aceite de semillas de cáñamo con CBD al 5%. Adecuado para el uso diario en personas con dolor crónico o de intensidad alta. El aceite de cáñamo con CBD de Terra Verda es orgánico, vegano y libre de crueldad animal. Su exclusivo método de extracción permite mantener todas las propiedades de la semilla de cáñamo sin trazos de tóxicos ni alcoholes. Puedes usarlo diariamente para aliviar las dolencias articulares o musculares por el dolor crónico, días estresantes o la actividad deportiva.',
	},
];

export const createProductCard = (args) => {
	console.log(args.id);
	// Main container
	const card = document.createElement('article');
	card.classList.add('product');
	card.dataset.id = args.id; // Variable used to show the product dialog on click

	// Product fields
	const productImage = document.createElement('img');
	productImage.classList.add('product__image');
	productImage.alt = `${args.item} product image`;
	productImage.src = `../assets/images/${args.id}.jpg`;
	card.appendChild(productImage);

	const productTitle = document.createElement('h3');
	productTitle.classList.add('product__title');
	productTitle.textContent = args.item;
	card.appendChild(productTitle);

	// Add amout paragraph as needed
	if (args.amount !== '') {
		const productAmount = document.createElement('p');
		productAmount.classList.add('product__amount');
		productAmount.textContent = args.amount;
		card.appendChild(productAmount);
	}

	// Add discount as needed
	if (args.discount && args.discount !== '') {
		const productDiscount = document.createElement('span');
		productDiscount.classList.add('product__discount');
		productDiscount.textContent = args.discount;
		card.appendChild(productDiscount);
	}

	const productPrice = document.createElement('p');
	productPrice.classList.add('product__price');
	productPrice.textContent = args.price;
	card.appendChild(productPrice);

	const heartIcon = document.createElement('img');
	heartIcon.classList.add('product__favorite');
	heartIcon.alt = 'Heart icon';
	heartIcon.src = '../assets/icons/heart-border-red.svg';

	heartIcon.addEventListener('click', (e) => {
		if (e.target.src.endsWith('/assets/icons/heart-border-red.svg')) {
			e.target.src = '../assets/icons/heart-fill-red.svg';
		} else {
			e.target.src = '../assets/icons/heart-border-red.svg';
		}
	});

	card.appendChild(heartIcon);

	// Card buttons
	const addToCartButton = document.createElement('button');
	addToCartButton.classList.add('btn', 'btn--orange', 'btn--block', 'product__cart-button');
	addToCartButton.dataset.productId = args.id;
	addToCartButton.type = 'button';
	const addToCartButtonIcon = document.createElement('img');
	addToCartButtonIcon.alt = 'Add to cart icon';
	addToCartButtonIcon.src = '../assets/icons/basket3-fill-white.svg';
	addToCartButton.textContent = 'Añadir a la canasta';
	addToCartButton.insertBefore(addToCartButtonIcon, addToCartButton.firstChild);
	card.appendChild(addToCartButton);

	/*Add to cart button event listener*/
	addToCartButton.addEventListener('click', (e) => {
		e.stopPropagation();
		addItem(parseInt(e.target.dataset.productId));
	});

	/*Click on card event*/
	productTitle.addEventListener('click', () => {
		createProductModal(args.id, productDetailsDialog);
	});

	productImage.addEventListener('click', () => {
		createProductModal(args.id, productDetailsDialog);
	});

	return card;
};

export const createProductModal = (id, dialog) => {
	const selectedProduct = products.filter((product) => product.id === id)[0];

	dialog.innerHTML = `

		<img src='../assets/images/${selectedProduct.id}.jpg' alt='${selectedProduct.item}' class='product-modal__image'/>
		<div class='product-modal__data'>
			<h2 class="product-modal__title">${selectedProduct.item}</h2>
			<p class="product-modal__amount">${selectedProduct.amount}</p>
			<p class="product-modal__price">
				${selectedProduct.price} <span class="product-modal__cost">${selectedProduct.annotations}</span>
			</p>
			<p class="product-modal__description">${selectedProduct.description}</p>
			<button class="btn btn--orange">
				<img alt="Add to cart icon" src="../assets/icons/basket3-fill-white.svg" />
				Añadir a la canasta
			</button>
		</div>
	`;

	const addToCartButton = document.querySelector('.product-modal .btn--orange');

	addToCartButton.addEventListener('click', () => {
		addItem(selectedProduct.id);
	});

	const heartIcon = document.createElement('img');
	heartIcon.classList.add('product-modal__favorite');
	heartIcon.alt = 'Heart icon';
	heartIcon.src = '../assets/icons/heart-border-red.svg';

	heartIcon.addEventListener('click', (e) => {
		if (e.target.src.endsWith('/assets/icons/heart-border-red.svg')) {
			e.target.src = '../assets/icons/heart-fill-red.svg';
		} else {
			e.target.src = '../assets/icons/heart-border-red.svg';
		}
	});

	productDetailsDialog.insertBefore(heartIcon, productDetailsDialog.firstChild);

	const closeIcon = document.createElement('img');
	closeIcon.classList.add('product-modal__close');
	closeIcon.src = '../assets/icons/x-square-fill-green.svg';
	closeIcon.alt = 'Close dialog icon';
	productDetailsDialog.insertBefore(closeIcon, productDetailsDialog.firstChild);

	closeIcon.addEventListener('click', (e) => {
		e.stopPropagation();
		productDetailsDialog.innerHTML = '';
		productDetailsDialog.classList.remove('product-modal--active');
	});

	dialog.classList.add('product-modal--active');
};

export const filterProdutsByPrice = (min, max, current) => {
	const filteredArray = current.filter((product) => {
		if (
			parseFloat(product.price.substring(0, product.price.length - 2).replace(',', '.')) >=
				min &&
			parseFloat(product.price.substring(0, product.price.length - 2).replace(',', '.')) <=
				max
		) {
			return product;
		}
	});

	return filteredArray;
};

export const filterProdutsByText = (criteria) => {
	const regEx = new RegExp(criteria, 'gi');

	const filteredProducts = products.filter((product) => {
		if (regEx.test(product.item) || regEx.test(product.description)) {
			return product;
		}
	});

	return filteredProducts;
};
