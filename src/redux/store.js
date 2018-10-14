import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {loanReducer} from './loanReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(loanReducer, composeEnhancers(applyMiddleware(thunk)))