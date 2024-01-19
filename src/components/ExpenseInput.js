import React, { useState } from 'react'
import  "./ExpenseInput.css"
function ExpenseInput(props) {

  const [expenseName,setExpenseName]=useState("");
  const [expensePrice,setExpensePrice]=useState('');

  const [userInput,setUserInput]=useState({
    expenseName:"",
    expensePrice:""
  })

  const submitHandler=(e)=>{
    e.preventDefault()
    props.addExpense(userInput)
  }
  return (
    <div>
          <form className='expenseInput' onSubmit={submitHandler}>
        <label htmlFor="expenseInput_itemName">Enter the Expense Name</label>
            <input type="text" className='expenseInput_expenseNameInput' onChange={(e)=>{setUserInput(prevState=>{
              return {...prevState,expenseName:e.target.value}
            })}}/>
            <label htmlFor="expenseInput_itemPrice">Enter the Expense Price</label>
            <input type="number" className='expenseInput_expensePriceInput' onChange={(e)=>{setUserInput(prevState=>{
              return {...prevState,expensePrice:e.target.value}
            })}}/>
            <input type="submit" className="expenseInput_submit" />
        </form>
    </div>
  )
}

export default ExpenseInput