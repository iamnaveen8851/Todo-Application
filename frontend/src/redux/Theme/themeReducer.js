import { TOGGLE_THEME } from "./actionItem"

const initialTheme= {
   isDarkTheme : false
}
const themeReducer = (state=initialTheme, action) => {
    switch (action.type) {
        case TOGGLE_THEME :
            return {...state, isDarkTheme: !state.isDarkTheme }
        default:
            return state
    }
}


export default themeReducer