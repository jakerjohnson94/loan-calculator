import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {loanReducer} from './loanReducer'
import {userInfoReducer} from './userInfoReducer'

const rootReducer = combineReducers({client: userInfoReducer, loan: loanReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))