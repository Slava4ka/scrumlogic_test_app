import React from 'react'
import style from './points.module.scss'

const WelcomePoint = ({ setBodyState, testName, testStart }) => {
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
