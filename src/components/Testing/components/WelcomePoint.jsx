import React from 'react'
import style from './points.module.scss'

const WelcomePoint = ({ setBodyState, testTitle }) => {
	return (
		<div className={style.welcomePoint}>
			<div className={style.welcomePoint__header}>
				<p className={`${style.label} ${style.label_margin}`}>{testTitle}</p>
			</div>
			<div className={style.welcomePoint__button}>
				<button
					className={`${style.btn} ${style.btn_margin}`}
					onClick={() => setBodyState(2)}
				>
					Пройти тест
				</button>
			</div>
		</div>
	)
}
export default WelcomePoint
