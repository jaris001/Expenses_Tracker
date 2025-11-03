import React, { useCallback } from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import { ACTION } from '../context/action'
import { FormatCurrency } from '../utils/formatCurrency.js'
import '../styles/ExpenseItem.css'

const ExpenseItem = ({ expense }) => {
  console.log('Rendering ExpenseItem...', expense);

  const { dispatch } = useContext(ExpenseContext)
  // const ID = expense.id

  // Memoized delete handler
  // This will prevent unnecessary re-renders of ExpenseItem
  // when the parent component re-renders
  const handleDelete = useCallback(() => {
    console.log('Removing expense with id:', expense.id);
    dispatch({
      type: ACTION.REMOVE,
      payload: expense.id,
    });
  }, [dispatch]);


  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>
      <p>Amount: {FormatCurrency(expense.amount)}</p>
      <p>Date: {expense.date}</p>
      <button onClick={handleDelete} >Remove</button>
    </div>
  )
}

export default ExpenseItem
