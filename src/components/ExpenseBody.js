import React from 'react'
import  "./ExpenseBody.css"
import ExpenseItem from './ExpenseItem'

function ExpenseBody(props) {

  return (
    <div className="expenseBody">
      
       <h2 className="expenseBody_title"> Monthly Expenses</h2>
       <ExpenseItem deleteExpense={props.deleteExpense} expenses={props.expenses}/>

    </div>
  )
}

export default ExpenseBody