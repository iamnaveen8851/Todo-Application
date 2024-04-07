import { ADD_TODO } from "./actionItem"

export const setTodo = (payload)=> {
    return {type : ADD_TODO, payload : payload}
}