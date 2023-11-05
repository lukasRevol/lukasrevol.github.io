const mobileNav = document.querySelector('.nav-mobile');
const burgerIcon = document.querySelector('.hamburger');
const links = document.querySelectorAll('.nav__nav-items--link');
//pobrane elementy do sterowania nawigacją
const dekstopNav = document.querySelector('.nav-desktop');
const scrollPoint = 600;
//pobrane elementy do stopki
const currentYear = document.querySelector('.footer__current-year');

burgerIcon.addEventListener('click', () => {
	mobileNav.classList.toggle('nav-mobile--active');
	burgerIcon.classList.toggle('is-active');
	document.body.classList.toggle('sticky-body');
});
const handleLinks = (event) => {
	mobileNav.classList.remove('nav-mobile--active');
	burgerIcon.classList.remove('is-active');
	document.body.classList.remove('sticky-body');
};

links.forEach((link) => {
	link.addEventListener('click', handleLinks);
});
// funkcja wyłaniająca nav i zamykająca po wybraniu sekcji

const changeNavOnScroll = () => {
	if (window.scrollY > scrollPoint) {
		dekstopNav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
		dekstopNav.style.boxShadow = '0px 5px 5px rgba(0, 0, 0, 0.2)';
	} else if (window.scrollY <= scrollPoint) {
		dekstopNav.style.backgroundColor = 'rgba(24, 24, 29, 0.6)';
		dekstopNav.style.boxShadow = 'none';
	}
};
window.addEventListener('scroll', changeNavOnScroll);
// funkcja zmieniająca kolor nav po scrollu

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	currentYear.innerText = year;
};
handleCurrentYear();
// funkcja aktualizująca rok na stopce strony