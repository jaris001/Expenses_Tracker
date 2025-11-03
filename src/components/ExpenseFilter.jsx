import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext.jsx'
import { ACTION } from '../context/action.js'
import '../styles/ExpenseFilter.css'

const ExpenseFilter = () => {

  console.log('Rendering ExpenseFilter...');
  const { state, dispatch } = useContext(ExpenseContext)

  // Handler for filter change
  // This will dispatch the SET_FILTER action
  const handleFilterChange = (e) => {
    console.log('Setting filter to:', e.target.value);
    dispatch({
      type: ACTION.SET_FILTER,
      payload: e.target.value
    })
  }

  return (
    <div className='expense-filter-container'>
      <label>Filter by category:</label>
      <select className='filter-option' value={state.filter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Betting">Betting</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>
    </div>
  )
}

export default ExpenseFilter
