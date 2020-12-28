const hamburger = document.getElementById('hamburger');

const toggleMenu = () => {
	if (hamburger.classList.contains('active')) {
		hamburger.classList.remove('active');
	} else {
		hamburger.classList.add('active');
	}
};

hamburger.addEventListener('click', toggleMenu);
