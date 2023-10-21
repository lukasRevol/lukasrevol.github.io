const questions = document.querySelectorAll('.faq__questions--question');
const answers = document.querySelectorAll('.faq__questions--answer');

questions.forEach((question, index) => {
	question.addEventListener('click', () => {
		console.log(`hi`);
		answers[index].classList.toggle('active');
	});
});
