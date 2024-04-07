import { setError, setLoading } from "../app_state/action"
import { LOGIN_SUCCESS } from "./actionItem"
import axios from 'axios'

export const login = () => {
    return {type : LOGIN_SUCCESS}
}

export const loginSuccess = (formState) => async (dispatch) => {
     dispatch(setLoading(true))
try {
    await axios.post(`https://reqres.in/api/login`,formState )
    dispatch(setLoading(false))
    dispatch(login())
} catch (error) {
    dispatch(setLoading(false))
    dispatch(setError(true))
}
}