import React from 'react'
import { reset, submit } from 'redux-form'
import { connect } from 'react-redux'
import style from './RadioButton.module.scss'

const RadioButtonField = ({ input, type, disabled, dispatch }) => {
	const onChangeSubmit = () => {
		input.onChange(input.value)
		const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

		return sleep(1).then(() => {
			dispatch(submit('testPoint'))
			dispatch(reset('testPoint'))
		})
	}

	return (
		<div className={style.radio}>
			<label className={style.radio__label}>
				<input
					{...input}
					type={type}
					placeholder={'test'}
					value={input.value}
					disabled={disabled}
					onChange={() => onChangeSubmit()}
				/>
				{input.value}
			</label>
		</div>
	)
}

export default connect()(RadioButtonField)
