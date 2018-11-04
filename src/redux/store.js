import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {loanReducer} from './loanReducer'
import {clientInfoReducer} from './clientInfoReducer'

const rootReducer = combineReducers({client: clientInfoReducer, loan: loanReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))