import React, { useEffect } from 'react'
import style from './EndPoint.module.scss'

const EndPoint = ({
	setBodyState,
	questionsQuantity,
	dropAnswers,
	getNumberOfCorrectAnswers,
	correctAnswersCounter,
}) => {
	useEffect(() => {
		getNumberOfCorrectAnswers()
	})

	const startNewTest = () => {
		setBodyState(1)
		dropAnswers()
	}

	return (
		<div className={`${style.endPoint} ${style.endPoint__margin}`}>
			<div>
				<p className={style.endPoint__text}>Тест завершен.</p>
				<p className={style.endPoint__text}>Вы правильно ответили</p>
				<p className={style.endPoint__text}>
					на {correctAnswersCounter} вопросов из {questionsQuantity}.
				</p>
			</div>
			<div>
				<p
					className={`${style.endPoint__link} ${style.endPoint__link_margin}`}
					onClick={() => startNewTest()}
				>
					Пройти тест заново
				</p>
			</div>
		</div>
	)
}
export default EndPoint
