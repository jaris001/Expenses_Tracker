import { createContext, useReducer, useEffect } from "react";
import { ExpenseReducer } from "./expenseReducer";

export const ExpenseContext = createContext()

// Initial state
// Load from localStorage if available
const intialState = {
  expenses: [],
  filter: "All"
}
// ExpenseProvider component to wrap the app
const ExpenseProvider = ({children}) => { 
  // Use useReducer to manage state
  // Initialize state from localStorage if available
  const [state, dispatch] = useReducer(ExpenseReducer, JSON.parse(localStorage.getItem("APP_STATE")) || intialState);

  // Persist state to localStorage on changes
  // Also log the state for debugging
  // This will help in tracking state changes
  useEffect(() => {
    console.log('Saving state to localStorage:', state);
    localStorage.setItem("APP_STATE", JSON.stringify(state))
  }, [state]);

  // Context value to be provided to consumers
  const value = {
    state,
    dispatch
  }

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;