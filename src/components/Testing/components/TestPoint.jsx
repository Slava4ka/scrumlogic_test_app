import React from 'react'
import style from './points.module.scss'
import RadioButtonField from '../common/RadioButtonField'
import { Field, reduxForm } from 'redux-form'

const TestPoint = ({
	handleSubmit,
	testQuestions,
	questionsQuantity,
	currentQuestion,
}) => {
	console.log(testQuestions[currentQuestion - 1]) // -1 т.к. это массив
	const question = testQuestions[currentQuestion - 1]

	return (
		<div className={style.testPoint}>
			<div className={style.testPoint__windowHeader}>
				<p
					className={`${style.testPoint__headerLabel} ${style.testPoint__headerLabel_margin}`}
				>
					Пройдено {currentQuestion} вопроса из {questionsQuantity}
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
				<form onSubmit={handleSubmit}>
					{question.answers.map((q, key) => (
						<Field
							key={key}
							name={question.questionId.toString()}
							type='radio'
							component={RadioButtonField}
							value={q.value}
						/>
					))}
				</form>
			</div>
		</div>
	)
}

const TestPointForm = reduxForm({
	form: 'testPoint',
})(TestPoint)

export default TestPointForm
