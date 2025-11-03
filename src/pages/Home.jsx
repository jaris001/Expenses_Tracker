import React from 'react'
import ExpenseForm from '../components/ExpenseForm.jsx'
import ExpenseList from '../components/ExpenseList.jsx'
import ExpenseFilter from '../components/ExpenseFilter.jsx'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to the Expense Tracker App</h1>
      <p>Track your expenses efficiently and effectively.</p>
      <ExpenseForm />
      <ExpenseList />
      <ExpenseFilter />
    </div>
  )
}

export default Home
