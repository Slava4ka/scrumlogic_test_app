import React from 'react'
import style from './ContinuationPoint.module.scss'

const ContinuationPoint = ({ setBodyState, dropAnswers, testFinish }) => {
	const continueTest = () => {
		setBodyState(2)
	}

	const restartTest = () => {
		testFinish()
		dropAnswers()
		setBodyState(1)
	}

	return (
		<div className={style.continuationPoint}>
			<div className={style.continuationPoint__header}>
				<p className={`${style.label} ${style.label_margin}`}>
					Вы хотите продолжить тестирование или начать заново?
				</p>
			</div>
			<div className={style.continuationPoint__buttons}>
				<button className={style.btn} onClick={continueTest}>
					Продолжить
				</button>
				<button className={style.btn} onClick={restartTest}>
					Начать заново
				</button>
			</div>
		</div>
	)
}
export default ContinuationPoint
