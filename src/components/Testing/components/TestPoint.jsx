import React from 'react'
import style from './points.module.scss'
import RadioButtonField from '../common/RadioButtonField'
import { Field, reduxForm } from 'redux-form'

const TestPoint = ({ handleSubmit }) => {
	return (
		<div className={style.testPoint}>
			<div className={style.testPoint__windowHeader}>
				<p
					className={`${style.testPoint__headerLabel} ${style.testPoint__headerLabel_margin}`}
				>
					Пройдено 2 вопроса из 13
				</p>
			</div>

			<div className={style.testPoint__question}>
				<p
					className={`${style.testPoint__questionLabel} ${style.testPoint__questionLabel_margin}`}
				>
					Вопрос №2: Текст вопроса
				</p>
			</div>

			<div className={style.testPoint__body_margin}>
				<form onSubmit={handleSubmit}>
					<Field
						name='question'
						type='radio'
						component={RadioButtonField}
						value={'Ответ 1'}
					/>
					<Field
						name='question'
						type='radio'
						component={RadioButtonField}
						value={'Ответ 2'}
					/>
					<Field
						name='question'
						type='radio'
						component={RadioButtonField}
						value={'Ответ 3'}
					/>
					<Field
						name='question'
						type='radio'
						component={RadioButtonField}
						value={'Ответ 4'}
					/>
				</form>
			</div>
		</div>
	)
}

const TestPointForm = reduxForm({
	form: 'testPoint',
})(TestPoint)

export default TestPointForm
