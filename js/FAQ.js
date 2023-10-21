//-------------------------------------
// FAQ function
//-------------------------------------

const questions = document.querySelectorAll('.faq__questions--question');
const answers = document.querySelectorAll('.faq__questions--answer');
// pobranie wszystkich pytań i odpowiedzi

questions.forEach((question, index) => {
	const arrow = question.querySelector('.fa-solid');
	let answer = answers[index]; //nadanie odpowiedzi indexu

	question.addEventListener('click', () => {
		//nadanie nasluchiwania na klik na pytanie dla konkretnej odpowiedzi
		answers.forEach((otherAnswer, i) => {
			if (i !== index && otherAnswer.classList.contains('active')) {
				otherAnswer.classList.remove('active');
				questions[i].querySelector('.fa-solid').style.transform =
					'rotate(0deg)';
			}
			//jeśli konkretne pytanie nie jest już wyświetlane to je schowaj i obróć strzalkę
		});

		answer.classList.toggle('active'); //togglowanie widoczności odpowiedzi

		if (arrow.style.transform === 'rotate(180deg)') {
			arrow.style.transform = 'rotate(0deg)';
		} else {
			arrow.style.transform = 'rotate(180deg)';
		}
		//funkcja sterująca strzalką
	});
});
