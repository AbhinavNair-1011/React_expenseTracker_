import React, { useState } from 'react'
import  "./ExpenseInput.css"
function ExpenseInput(props) {

  const [expenseName,setExpenseName]=useState("");
  const [expensePrice,setExpensePrice]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault()
    props.addExpense({expenseName,expensePrice})
  }
  return (
    <div>
          <form className='expenseInput' onSubmit={submitHandler}>
        <label htmlFor="expenseInput_itemName">Enter the Expense Name</label>
            <input type="text" className='expenseInput_expenseNameInput' onChange={(e)=>{setExpenseName(e.target.value)}}/>
            <label htmlFor="expenseInput_itemPrice">Enter the Expense Price</label>
            <input type="number" className='expenseInput_expensePriceInput' onChange={(e)=>{setExpensePrice(e.target.value)}}/>
            <input type="submit" className="expenseInput_submit" />
        </form>
    </div>
  )
}

export default ExpenseInput