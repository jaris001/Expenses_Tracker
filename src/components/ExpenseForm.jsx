import { ACTION } from "../context/action";
import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext.jsx";
import "../styles/ExpenseForm.css";

const ExpenseForm = () => {

  // Access dispatch from context
  // This allows us to send actions to the reducer
  // for updating the global state
  const { dispatch } = useContext(ExpenseContext);

  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // Handle form submission
  // This will dispatch an ADD action to the reducer
  // with the new expense data
  // and reset the form fields
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION.ADD,
      payload: {
        id: crypto.randomUUID(),
        title: title,
        amount: parseFloat(amount),
        category: category,
        date: new Date().toDateString()
      }
    })

    setTitle("");
    setAmount("");
    setCategory("");
  }

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select
          className="expense-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Betting">Betting</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm
