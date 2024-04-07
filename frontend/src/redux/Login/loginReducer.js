import { LOGIN_SUCCESS } from "./actionItem";

const loginState = {
  isAuth: false,
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isAuth: true };

    default:
      return state;
  }
};
