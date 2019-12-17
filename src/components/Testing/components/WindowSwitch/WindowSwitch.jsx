import React, { useState } from 'react'
import Switch from 'react-switch'
import style from './WindowSwitch.module.scss'

const WindowSwitch = ({ checked, setChecked }) => {
	return (
		<div className={style.switcherBox}>
			<span>Зафиксировать размер окна</span>
			<Switch
				className={style.switcher}
				onChange={setChecked}
				checked={checked}
				onColor={'#296faf'}
				uncheckedIcon={false}
				checkedIcon={false}
			/>
		</div>
	)
}
export default WindowSwitch
