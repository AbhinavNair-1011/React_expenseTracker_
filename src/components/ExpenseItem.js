import React from 'react'
import "./ExpenseItem.css"
import DeleteButton from './DeleteButton'

function ExpenseItem(props) {
    console.log(props)
    
  return (
    <div>
        <ul className="expenseList">
          
        {props.expenses.map((item)=>(

                <li key={item.price} className='expenseList_expenses'><span className="expenseNameSpan">{item.name}</span> 
                <span className="expensePriceSpan ">{item.price}</span> <DeleteButton/></li>
               
        ))}
        </ul>
    </div>
  )
}

export default ExpenseItem