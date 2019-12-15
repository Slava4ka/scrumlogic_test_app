import React, { useState } from 'react'
import style from './Testing.module.scss'
import WelcomePoint from './components/WelcomePoint'
import TestPoint from './components/TestPoint'
import EndPoint from './components/EndPoint'
import { connect } from 'react-redux'

const getBody = (bodyState, setBodyState, onSubmit, testQuestions) => {
	switch (bodyState) {
		case 1:
			return (
				<WelcomePoint
					setBodyState={setBodyState}
					testTitle={'Заголовок теста'}
				/>
			)
		case 2:
			return (
				<TestPoint
					setBodyState={setBodyState}
					onSubmit={onSubmit}
					testQuestions={testQuestions}
				/>
			)
		case 3:
			return <EndPoint setBodyState={setBodyState} />
		default:
			return <WelcomePoint setBodyState={setBodyState} />
	}
}

const Testing = ({ testQuestions }) => {
	const [bodyState, setState] = useState(2)

	const onSubmit = formData => {
		console.log('rere')
		console.log(formData)
	}

	const body = getBody(bodyState, setState, onSubmit, testQuestions)

	return (
		<div className={style.testingPage}>
			<div className={style.testingBox}>{body}</div>
		</div>
	)
}

const mapStateToProps = state => ({
	testQuestions: state.testingReducer.testQuestions,
})

export default connect(mapStateToProps, {})(Testing)
