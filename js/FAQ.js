const questions = document.querySelectorAll('.faq__questions--question');

questions.forEach((question) => {
	question.addEventListener('click', () => {
        console.log(`hi`);
		question.classList.toggle('active');
	});
});
