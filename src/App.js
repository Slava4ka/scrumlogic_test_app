import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import Testing from './components/Testing/Testing'

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Testing />
			</div>
		</Provider>
	)
}

export default App
