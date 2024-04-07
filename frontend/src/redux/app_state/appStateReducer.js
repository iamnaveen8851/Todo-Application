import { Loading } from "./actionItem"

const defaultState = {
    isLoading : false,
    isError : false,
}

export const appStateReducer = (state =  defaultState, action) => {
    switch(action.type) { 
       case Loading:
        return {isLoading  : action.payload, isError : false}

        case Error:
            return {isError : action.payload, isLoading : false}

            default :
            return state
        }
    }

