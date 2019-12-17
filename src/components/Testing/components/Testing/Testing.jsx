import React, { useState } from 'react'
import style from './Testing.module.scss'
import WelcomePoint from '../Points/WelcomPoint/WelcomePoint'
import TestPoint from '../Points/TestPoint/TestPoint'
import EndPoint from '../Points/EndPoint/EndPoint'
import { connect } from 'react-redux'
import {
	setAnswers,
	dropAnswers,
	getNumberOfCorrectAnswers,
	testFinish,
	testStart,
	nextQuestion,
} from '../../../../redux/reducers/testing-reducer'

const getBody = (
	bodyState,
	setBodyState,
	onSubmit,
	testQuestions,
	testName,
	questionsQuantity,
	isTestStart,
	currentQuestion,
	testStart,
	dropAnswers,
	getNumberOfCorrectAnswers,
	correctAnswersCounter
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
			return (
				<EndPoint
					setBodyState={setBodyState}
					questionsQuantity={questionsQuantity}
					dropAnswers={dropAnswers}
					getNumberOfCorrectAnswers={getNumberOfCorrectAnswers}
					correctAnswersCounter={correctAnswersCounter}
				/>
			)
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
	setAnswers,
	testStart,
	testFinish,
	dropAnswers,
	getNumberOfCorrectAnswers,
	correctAnswersCounter,
	nextQuestion,
	checked,
}) => {
	const [bodyState, setState] = useState(1)

	const onSubmit = formData => {
		//console.log(formData)

		nextQuestion()
		if (currentQuestion === questionsQuantity) {
			setAnswers(formData)
			testFinish()
			setState(3)
		}
		/*	console.log(
			`currentQuestion: ${currentQuestion}; questionsQuantity ${questionsQuantity}`
		)*/
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
		testStart,
		dropAnswers,
		getNumberOfCorrectAnswers,
		correctAnswersCounter
	)

	return (
		<div className={style.testingPage}>
			<div
				className={`${style.testingBox} ${
					checked ? style.testingBox_fixSize : style.testingBox_expanding
				}`}
			>
				{body}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	testQuestions: state.testingReducer.testQuestions,
	testName: state.testingReducer.testName,
	questionsQuantity: state.testingReducer.questionsQuantity,
	isTestStart: state.testingReducer.isTestStart,
	currentQuestion: state.testingReducer.currentQuestion,
	correctAnswersCounter: state.testingReducer.correctAnswersCounter,
})

export default connect(mapStateToProps, {
	setAnswers,
	testStart,
	testFinish,
	dropAnswers,
	getNumberOfCorrectAnswers,
	nextQuestion,
})(Testing)
