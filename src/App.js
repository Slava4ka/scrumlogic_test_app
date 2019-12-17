import React, { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import Testing from './components/Testing/components/Testing/Testing'
import WindowSwitch from './components/Testing/components/WindowSwitch/WindowSwitch'

function App() {
	const [checked, setChecked] = useState(false)

	return (
		<Provider store={store}>
			<div className='App'>
				<WindowSwitch checked={checked} setChecked={setChecked} />
				<Testing checked={checked} />
			</div>
		</Provider>
	)
}

export default App
