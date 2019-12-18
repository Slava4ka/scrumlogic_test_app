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
import ContinuationPoint from '../Points/ContinuationPoint/ContinuationPoint'

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
	correctAnswersCounter,
	testFinish
) => {
	switch (bodyState) {
		case 1:
			return (
				<WelcomePoint
					setBodyState={setBodyState}
					testName={testName}
					testStart={testStart}
					isTestStart={isTestStart}
					currentQuestion={currentQuestion}
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
		case 4:
			return (
				<ContinuationPoint
					setBodyState={setBodyState}
					dropAnswers={dropAnswers}
					testFinish={testFinish}
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
		nextQuestion()
		setAnswers(formData)
		if (currentQuestion === questionsQuantity) {
			testFinish()
			setState(3)
		}
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
		correctAnswersCounter,
		testFinish
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
	testQuestions: state.testingPresistedStore.testQuestions,
	testName: state.testingPresistedStore.testName,
	questionsQuantity: state.testingPresistedStore.questionsQuantity,
	isTestStart: state.testingPresistedStore.isTestStart,
	currentQuestion: state.testingPresistedStore.currentQuestion,
	correctAnswersCounter: state.testingPresistedStore.correctAnswersCounter,
})

export default connect(mapStateToProps, {
	setAnswers,
	testStart,
	testFinish,
	dropAnswers,
	getNumberOfCorrectAnswers,
	nextQuestion,
})(Testing)
