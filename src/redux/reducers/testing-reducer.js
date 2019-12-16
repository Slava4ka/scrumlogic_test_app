import data from '../../data.json'

const ADD_USER_ANSWER = 'scrumlogic_app/testing-reducer/ADD-USER-ANSWER'
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

const countTheCorrectAnswers = () => {}

const TestingReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_ANSWER: {
			return {
				...state,
				userAnswers: [...state.userAnswers, action.value],
				currentQuestion: state.currentQuestion + 1,
			}
		}

		case SET_TESTS_START: {
			return { ...state, isTestStart: true, currentQuestion: 1 }
		}

		case SET_TESTS_FINISH: {
			return { ...state, isTestStart: false, currentQuestion: false }
		}

		case DROP_USER_ANSWERS: {
			return { ...state, userAnswers: [] }
		}

		case GET_THE_NUMBER_OF_CORRECT_ANSWERS: {
			return { ...state, correctAnswersCounter: countTheCorrectAnswers() }
		}

		default:
			return state
	}
}

export const addAnswer = value => ({ type: ADD_USER_ANSWER, value })

export const testStart = () => ({ type: SET_TESTS_START })

export const testFinish = () => ({ type: SET_TESTS_FINISH })

export const dropAnswers = () => ({ type: DROP_USER_ANSWERS })

export const getNumberOfCorrectAnswers = () => ({
	type: GET_THE_NUMBER_OF_CORRECT_ANSWERS,
})

export default TestingReducer
