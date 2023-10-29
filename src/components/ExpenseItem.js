import React from 'react'
import "./ExpenseItem.css"

function ExpenseItem(props) {
    console.log(props)
  return (
    <div>
        <ul className="expenseList">
            <li className='expenseList_expenses'><span className="expenseNameSpan"> Expense Name </span> 
                <span className="expensePriceSpan ">Expense Price</span>

            </li>
        {props.expenses.map((item)=>(

                <li className='expenseList_expenses'><span className="expenseNameSpan">{item.name}</span> 
                <span className="expensePriceSpan ">{item.price}</span></li>
        ))}
        </ul>
    </div>
  )
}

export default ExpenseItem