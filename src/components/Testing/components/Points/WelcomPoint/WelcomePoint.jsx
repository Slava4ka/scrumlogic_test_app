import React, { useEffect } from 'react'
import style from './WelcomePoint.module.scss'

const WelcomePoint = ({
	setBodyState,
	testName,
	testStart,
	isTestStart,
	currentQuestion,
}) => {
	useEffect(() => {
		if (isTestStart && currentQuestion > 0) {
			setBodyState(4)
		}
	})

	const startClickTest = () => {
		setBodyState(2)
		testStart()
	}

	return (
		<div className={style.welcomePoint}>
			<div className={style.welcomePoint__header}>
				<p className={`${style.label} ${style.label_margin}`}>{testName}</p>
			</div>
			<div className={style.welcomePoint__button}>
				<button
					className={`${style.btn} ${style.btn_margin}`}
					onClick={startClickTest}
				>
					Пройти тест
				</button>
			</div>
		</div>
	)
}
export default WelcomePoint
