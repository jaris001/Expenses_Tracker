import ExpenseItem from './ExpenseItem.jsx'
import { useContext, useMemo } from 'react'
import { ExpenseContext } from '../context/ExpenseContext.jsx'
import {FormatCurrency} from '../utils/formatCurrency.js'
import '../styles/ExpenseList.css'


const ExpenseList = () => {
  console.log('Rendering ExpenseList...');
  const { state } = useContext(ExpenseContext);

  // Memoized filtered expenses
  // This will only re-run when the state.filter or state.expenses change
  const filterExpenses = useMemo(() => {
    if (state.filter === "All") return state.expenses;
    return state.expenses.filter((exp) => {
      return exp.category === state.filter
    })
  }, [state]);

  const totalAmount = useMemo(() => {
    // console.log('Calculating total amount...');
    // This will only re-run when filterExpenses changes
    return filterExpenses.reduce((acc, exp) => acc + exp.amount, 0)
  }, [filterExpenses]);
  return (
    <div className='expense-list-container'>
      {// Display total expenses
      // This will update automatically when totalAmount changes
      // thanks to useMemo
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      }
      <h2>Total Expenses: {FormatCurrency(totalAmount)}</h2>
      {filterExpenses.map((exp, index) => (
        <ExpenseItem key={index} expense={exp} />
      ))}
    </div>
  )
}

export default ExpenseList

