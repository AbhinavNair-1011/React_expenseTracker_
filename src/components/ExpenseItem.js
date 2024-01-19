import React from 'react'
import "./ExpenseItem.css"
import DeleteButton from './DeleteButton'

function ExpenseItem(props) {
    
  return (
    <div>
        <ul className="expenseList">

          {props.expenses.length ==0 && <p>No expenses yet</p>}
          
        {props.expenses.map((item)=>(

                <li key={item.expensePrice} className='expenseList_expenses'><span className="expenseNameSpan">{item.expenseName}</span> 
                <span className="expensePriceSpan ">{item.expensePrice}</span> <DeleteButton deleteExpense={props.deleteExpense}/></li>
               
        )) }
        </ul>
    </div>
  )
}

export default ExpenseItem