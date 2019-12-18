import data from '../../data.json'

const SET_USER_ANSWERS = 'scrumlogic_app/testing-reducer/SET-USER-ANSWERS'
const SET_NEXT_CURRENT_QUESTION =
	'scrumlogic_app/testing-reducer/SET-NEXT-CURRENT-QUESTION'
const DROP_USER_ANSWERS = 'scrumlogic_app/testing-reducer/DROP-USER-ANSWERS'
const SET_TESTS_START = 'scrumlogic_app/testing-reducer/SET-TESTS-START'
const SET_TESTS_FINISH = 'scrumlogic_app/testing-reducer/SET-TESTS-FINISH'
const GET_THE_NUMBER_OF_CORRECT_ANSWERS =
	'scrumlogic_app/testing-reducer/GET-THE-NUMBER-OF-CORRECT-ANSWERS'

const initialState = {
	testName: data.name,
	testQuestions: data.questions,
	questionsQuantity: data.questions.length,
	isTestStart: false,
	currentQuestion: false,
	userAnswers: [],
	correctAnswersCounter: 0,
}

const addAnswer = (obj, property) => {
	const key = Object.keys(property)[0]
	return { ...obj, [key]: property[key] }
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

const countRightAnswers = answers => {
	return answers.filter(answer => answer.right).length
}

const countWrongAnswers = answers => {
	return answers.filter(answer => !answer.right).length
}

const TestingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEXT_CURRENT_QUESTION: {
			return { ...state, currentQuestion: state.currentQuestion + 1 }
		}

		case SET_USER_ANSWERS: {
			return {
				...state,
				userAnswers: addAnswer(state.userAnswers, action.value),
			}
		}

		case SET_TESTS_START: {
			return { ...state, isTestStart: true, currentQuestion: 1 }
		}

		case SET_TESTS_FINISH: {
			return { ...state, isTestStart: false, currentQuestion: false }
		}

		case DROP_USER_ANSWERS: {
			return { ...state, userAnswers: [], correctAnswersCounter: 0 }
		}

		case GET_THE_NUMBER_OF_CORRECT_ANSWERS: {
			return {
				...state,
				correctAnswersCounter: countRightAnswers(
					checkAnswers(state.testQuestions, state.userAnswers)
				),
			}
		}

		default:
			return state
	}
}

export const nextQuestion = () => ({ type: SET_NEXT_CURRENT_QUESTION })

export const setAnswers = value => ({ type: SET_USER_ANSWERS, value })

export const testStart = () => ({ type: SET_TESTS_START })

export const testFinish = () => ({ type: SET_TESTS_FINISH })

export const dropAnswers = () => ({ type: DROP_USER_ANSWERS })

export const getNumberOfCorrectAnswers = () => ({
	type: GET_THE_NUMBER_OF_CORRECT_ANSWERS,
})

export default TestingReducer
