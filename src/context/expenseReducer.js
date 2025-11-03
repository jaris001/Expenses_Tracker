import {ACTION} from './action.js';

// Reducer function to manage expense state
export const ExpenseReducer = (state, action) => {

  // Handle different action types
  // This will help in tracking state changes
  switch(action.type) {
    case ACTION.ADD : return {
      ...state,
      expenses: [...state.expenses, action.payload]
    }
    case ACTION.REMOVE : return {
      ...state,
      expenses: state.expenses.filter(exp => exp.id !== action.payload)
    }
    case ACTION.SET_FILTER : return {
      ...state,
      filter: action.payload
    }
    default: return state;
  }
}