import React, { useState } from 'react'
import Switch from 'react-switch'
import style from './WindowSwitch.module.scss'
import { connect } from 'react-redux'
import { toggleFlag } from '../../../../redux/reducers/testing-reducer'

const WindowSwitch = ({ screenFixFlag, toggleFlag }) => {
	return (
		<div className={style.switcherBox}>
			<span>Зафиксировать размер окна</span>
			<Switch
				className={style.switcher}
				onChange={toggleFlag}
				checked={screenFixFlag}
				onColor={'#296faf'}
				uncheckedIcon={false}
				checkedIcon={false}
			/>
		</div>
	)
}

const mapStateToProps = state => ({
	screenFixFlag: state.testingPresistedStore.screenFixFlag,
})

export default connect(mapStateToProps, { toggleFlag })(WindowSwitch)
