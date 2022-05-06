function mudarTema() {
	changeClasses();
	alterarTexto();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function alterarTexto() {
	const modoClaro = 'Tema Claro';
	const modoEscuro = 'Tema Escuro';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = modoClaro;
		h1.innerHTML = modoEscuro;
		return;
	}

	button.innerHTML = modoEscuro;
	h1.innerHTML = modoClaro;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', mudarTema);