const mobileNav = document.querySelector('.nav-mobile');
const burgerIcon = document.querySelector('.hamburger');
const links = document.querySelectorAll('.nav__nav-items--link');
//pobrane elementy do sterowania nawigacją
const nav = document.querySelector('.nav');
const scrollPoint = 68.61

burgerIcon.addEventListener('click', () => {
	mobileNav.classList.toggle('nav-mobile--active');
	burgerIcon.classList.toggle('is-active');
	document.body.classList.toggle('sticky-body');
});
const handleLinks = (event) => {
	mobileNav.classList.remove('nav-mobile--active');
};

links.forEach((link) => {
	link.addEventListener('click', handleLinks);
});
// funkcja wyłaniająca nav i zamykająca po wybraniu sekcji


