import { ADD_TODO } from "./actionItem";

const todo = [];
export const todoReducer = (state = todo, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...action.payload]
    default:
      return state;
  }
};
