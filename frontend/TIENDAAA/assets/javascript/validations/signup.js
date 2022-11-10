const regEx = {
	'first-name': /^[a-zA-ZÃ€-Ã¿\s]{5,40}$/, //Solo se permiten, letras, espacios y acentos
	'last-name': /^[a-zA-ZÃ€-Ã¿\s]{5,40}$/, //Solo se permiten, letras, espacios y acentos
	'email': /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	'password': /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$!%*#?&/%])[A-Za-z\d$!%*#?&/%]{8,}$/, // MÃ­nimo 8 dÃ­gitos, con una letra, un nÃºmero y un caracter especial
	'password-2': /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$!%*#?&/%])[A-Za-z\d$!%*#?&/%]{8,}$/, // MÃ­nimo 8 dÃ­gitos, con una letra, un nÃºmero y un caracter especial
};

const fields = {
	'first-name': false,
	'last-name': false,
	'email': false,
	'password': false,
	'password-2': false,
};

const inputs = document.querySelectorAll('.form-card__input');
const form = document.getElementById('signup-form');
const formGeneralError = document.getElementById('form-error');

const password = document.getElementById('password');
const password2 = document.getElementById('password-2');

inputs.forEach((input) =>
	input.addEventListener('input', (e) => {
		// Change password-2 state whan password change
		if (e.target.name === 'password') {
			password2.parentElement.classList.add('form-card__group--incorrect');
			fields['password-2'] = false;
		}

		if (e.target.name !== 'password-2') {
			// Validate all fields except password-2 with regular expressions
			if (regEx[e.target.name].test(e.target.value.trim().replace(/\s\s+/g, ' '))) {
				e.target.parentElement.classList.remove('form-card__group--incorrect');
				fields[e.target.name] = true;
			} else {
				e.target.parentElement.classList.add('form-card__group--incorrect');
				fields[e.target.name] = false;
			}
		} else {
			// Validate password-2 is equal that password

			if (e.target.value === password.value) {
				e.target.parentElement.classList.remove('form-card__group--incorrect');
				fields[e.target.name] = true;
			} else {
				e.target.parentElement.classList.add('form-card__group--incorrect');
				fields[e.target.name] = false;
			}
		}
	}),
);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let flag = true;

	for (key in fields) {
		if (!fields[key]) {
			formGeneralError.classList.add('form-card__error--visible');
			flag = false;
			break;
		} else {
			formGeneralError.classList.remove('form-card__error--visible');
		}
	}
});