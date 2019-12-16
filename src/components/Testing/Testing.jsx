import React, { useState } from 'react'
import style from './Testing.module.scss'
import WelcomePoint from './components/WelcomePoint'
import TestPoint from './components/TestPoint'
import EndPoint from './components/EndPoint'
import { connect } from 'react-redux'
import { addAnswer, testStart } from '../../redux/reducers/testing-reducer'

const getBody = (
	bodyState,
	setBodyState,
	onSubmit,
	testQuestions,
	testName,
	questionsQuantity,
	isTestStart,
	currentQuestion,
	testStart
) => {
	switch (bodyState) {
		case 1:
			return (
				<WelcomePoint
					setBodyState={setBodyState}
					testName={testName}
					testStart={testStart}
				/>
			)
		case 2:
			return (
				<TestPoint
					setBodyState={setBodyState}
					onSubmit={onSubmit} // ответить на вопрос
					testQuestions={testQuestions} // массив с вопросами
					questionsQuantity={questionsQuantity} // общее количество вопросов
					currentQuestion={currentQuestion} // текущий вопрос
				/>
			)
		case 3:
			return <EndPoint setBodyState={setBodyState} />
		default:
			return <WelcomePoint setBodyState={setBodyState} />
	}
}

const Testing = ({
	testQuestions,
	testName,
	questionsQuantity,
	isTestStart,
	currentQuestion,
	addAnswer,
	testStart,
}) => {
	const [bodyState, setState] = useState(1)

	const onSubmit = formData => {
		addAnswer(formData)
		console.log(formData)
		if (currentQuestion === questionsQuantity) setState(3)
		console.log(
			`currentQuestion: ${currentQuestion}; questionsQuantity ${questionsQuantity}`
		)
	}

	const body = getBody(
		bodyState,
		setState,
		onSubmit,
		testQuestions,
		testName,
		questionsQuantity,
		isTestStart,
		currentQuestion,
		testStart
	)

	return (
		<div className={style.testingPage}>
			<div className={style.testingBox}>{body}</div>
		</div>
	)
}

const mapStateToProps = state => ({
	testQuestions: state.testingReducer.testQuestions,
	testName: state.testingReducer.testName,
	questionsQuantity: state.testingReducer.questionsQuantity,
	isTestStart: state.testingReducer.isTestStart,
	currentQuestion: state.testingReducer.currentQuestion,
})

export default connect(mapStateToProps, { addAnswer, testStart })(Testing)
