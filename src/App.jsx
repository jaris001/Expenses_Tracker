import React from 'react'
import ExpenseProvider from './context/ExpenseContext.jsx'
import Home from './pages/Home.jsx'
import './styles/App.css'

const App = () => {
  return (
    <div className="app-container">
      <ExpenseProvider>
        <Home />
      </ExpenseProvider>
    </div>

  )
}

export default App