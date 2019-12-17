import React from 'react'
import style from '../../points.module.scss'
import RadioButtonField from '../../../common/RadioButtonField'
import { Field, reduxForm } from 'redux-form'
import { declOfNum } from '../../../../../scripts/countFormatter'

const TestPoint = ({
	onSubmit,
	testQuestions,
	questionsQuantity,
	currentQuestion,
}) => {
	//console.log(testQuestions[currentQuestion - 1]) // -1 т.к. это массив
	const question = testQuestions[currentQuestion - 1]

	return (
		<div className={style.testPoint}>
			<div className={style.testPoint__windowHeader}>
				<p
					className={`${style.testPoint__headerLabel} ${style.testPoint__headerLabel_margin}`}
				>
					Пройдено {currentQuestion} {declOfNum(currentQuestion)} из{' '}
					{questionsQuantity}
				</p>
			</div>

			<div className={style.testPoint__question}>
				<p
					className={`${style.testPoint__questionLabel} ${style.testPoint__questionLabel_margin}`}
				>
					Вопрос №{currentQuestion}: {question.question}
				</p>
			</div>

			<div className={style.testPoint__body_margin}>
				{question.answers.map((q, key) => (
					<TestPointForm
						key={key}
						onSubmit={onSubmit}
						question={question}
						value={q.value}
					/>
				))}
			</div>
		</div>
	)
}

const TestForm = ({ handleSubmit, question, value }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name={`questionId_${question.questionId}`}
				type='radio'
				component={RadioButtonField}
				value={value}
			/>
		</form>
	)
}

const TestPointForm = reduxForm({
	form: 'testPoint',
})(TestForm)

export default TestPoint
