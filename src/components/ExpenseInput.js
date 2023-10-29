import React from 'react'
import  "./ExpenseInput.css"
function ExpenseInput() {
  return (
    <div>
          <form className='expenseInput'>
        <label for="expenseInput_itemName">Enter the Expense Name</label>
            <input type="text" className='expenseInput_expenseNameInput'/>
            <label for="expenseInput_itemPrice">Enter the Expense Price</label>
            <input type="number" className='expenseInput_expensePriceInput'/>
            <input type="submit" className="expenseInput_submit" />
        </form>
    </div>
  )
}

export default ExpenseInput