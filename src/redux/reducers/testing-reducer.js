import data from '../../data.json'

const ADD_USER_ANSWER = 'scrumlogic_app/testing-reducer/ADD-USER-ANSWER'
const DROP_USER_ANSWERS = 'scrumlogic_app/testing-reducer/DROP-USER-ANSWERS'

const initialState = {
	testQuestions: data,
	testStart: false,
	userAnswers: {},
	questionsQuantity: {},
	currentQuestion: {},
}

const TestingReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default TestingReducer
