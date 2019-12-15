import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TestingReducer from './reducers/testing-reducer'

const rootReducer = combineReducers({
	form: formReducer,
	testingReducer: TestingReducer,
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.__store__ = store

export default store
