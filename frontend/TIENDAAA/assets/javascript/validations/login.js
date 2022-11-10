const regEx = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$!%*#?&/%])[A-Za-z\d$!%*#?&/%]{8,}$/, // MÃ­nimo 8 dÃ­gitos, con una letra, un nÃºmero y un caracter especial
};

const fields = {
	email: false,
	password: false,
};

const inputs = document.querySelectorAll('.form-card__input');
const form = document.getElementById('login-form');
const formGeneralError = document.getElementById('form-error');

inputs.forEach((input) =>
	input.addEventListener('input', (e) => {
		if (regEx[e.target.name].test(e.target.value.trim().replace(/\s\s+/g, ' '))) {
			e.target.parentElement.parentElement.classList.remove('form-card__group--incorrect');
			fields[e.target.name] = true;
		} else {
			e.target.parentElement.parentElement.classList.add('form-card__group--incorrect');
			fields[e.target.name] = false;
		}
	}),
);

newFunction();

function newFunction() {
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
}
