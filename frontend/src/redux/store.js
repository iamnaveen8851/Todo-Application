import {legacy_createStore, combineReducers} from 'redux'
import { appStateReducer } from './app_state/appStateReducer'
import { todoReducer } from './todo/todoReducer'
import { loginReducer } from './Login/loginReducer'
import {applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk' 
import themeReducer from './Theme/themeReducer'

const rootReducer = combineReducers({
    appState : appStateReducer,
    todo : todoReducer,
    login : loginReducer,
    theme : themeReducer
})
export const store =  legacy_createStore(rootReducer, applyMiddleware(thunk))