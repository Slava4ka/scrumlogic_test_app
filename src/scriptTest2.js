const testQuestions = [
	{
		questionId: 1,
		question: 'Сколько весит куб бетона М 250?',
		answers: [
			{
				value: '2348 кг',
				right: true,
			},
			{
				value: '2000 кг',
				right: false,
			},
			{
				value: '3543 кг',
				right: false,
			},
			{
				value: '2999 кг',
				right: false,
			},
		],
	},
	{
		questionId: 2,
		question: 'Кто играл бэтмена в трилогии Кристофера Нолана?',
		answers: [
			{
				value: 'Константин Хабенский',
				right: false,
			},
			{
				value: 'Джейк Джилленхол',
				right: false,
			},
			{
				value: 'Роберт Дауни — младший',
				right: false,
			},
			{
				value: 'Кристиан Бэйл',
				right: true,
			},
		],
	},
	{
		questionId: 3,
		question:
			'Как зовут главного героя повести Николая Васильевича Гоголя "Шинель"?',
		answers: [
			{
				value: 'Иван Александрович Хлестаков',
				right: false,
			},
			{
				value: 'Акакий Акакиевич Башмачкин',
				right: true,
			},
			{
				value: 'Михаил Семёнович Собакевич',
				right: false,
			},
			{
				value: 'Аксентий Иванович Поприщин',
				right: false,
			},
		],
	},
	{
		questionId: 4,
		question: 'Чему равна скорость света в вакууме?',
		answers: [
			{
				value: '300 000 км/с',
				right: true,
			},
			{
				value: '250 000 км/с',
				right: false,
			},
			{
				value: '423 000 км/с',
				right: false,
			},
			{
				value: '500 000 км/с',
				right: false,
			},
		],
	},
	{
		questionId: 5,
		question: 'Сколько раз сборная Италии по футболу была чемпионом мира?',
		answers: [
			{
				value: '2',
				right: false,
			},
			{
				value: '3',
				right: false,
			},
			{
				value: '4',
				right: true,
			},
			{
				value: '5',
				right: false,
			},
		],
	},
]

const userAnswers = {
	questionId_1: '2348 кг',
	questionId_2: 'Константин Хабенский',
	questionId_3: 'Иван Александрович Хлестаков',
	questionId_4: '300 000 км/с',
	questionId_5: '2',
}

const checkAnswers = (questionsArr, answersArr) => {
	const createObj = (questionId, value, right) => {
		return { questionId, value, right }
	}

	return questionsArr.map(question => {
		const currentAnswer = question.answers.find(
			answer => answer.value === answersArr[`questionId_${question.questionId}`]
		)
		return createObj(
			question.questionId,
			currentAnswer.value,
			currentAnswer.right
		)
	})
}

console.log(checkAnswers(testQuestions, userAnswers))

function declOfNum(number) {
	const cases = [2, 0, 1, 1, 1, 2]
	const titles = ['вопрос', 'вопроса', 'вопросов']
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	]
}

for (let i = 0; i < 101; i++) {
	console.log(i + ' ' + declOfNum(i))
}
