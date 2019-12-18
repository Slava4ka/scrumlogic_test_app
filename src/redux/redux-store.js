import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TestingReducer from './reducers/testing-reducer'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const TestingPersistConfig = {
	key: 'testingPresistedStore',
	storage,
	whitelist: [
		'testName',
		'isTestStart',
		'currentQuestion',
		'userAnswers',
		'screenFixFlag',
	],
}

const rootReducer = combineReducers({
	form: formReducer,
	testingPresistedStore: persistReducer(TestingPersistConfig, TestingReducer),
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.__store__ = store

export const persistor = persistStore(store)

export default store
