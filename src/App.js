import React, { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/redux-store'
import Testing from './components/Testing/components/Testing/Testing'
import WindowSwitch from './components/Testing/components/WindowSwitch/WindowSwitch'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
	const [checked, setChecked] = useState(false)

	return (
		<Provider store={store}>
			<PersistGate loading={<div>Loading</div>} persistor={persistor}>
				<div className='App'>
					<WindowSwitch checked={checked} setChecked={setChecked} />
					<Testing checked={checked} />
				</div>
			</PersistGate>
		</Provider>
	)
}

export default App
