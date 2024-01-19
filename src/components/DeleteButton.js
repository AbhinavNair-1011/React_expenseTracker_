import React from 'react'

const DeleteButton = (props) => {

let deleteHandler=(e)=>{
    let name=e.target.parentElement.children[0].innerText
    let price=e.target.parentElement.children[1].innerText
props.deleteExpense({name,price})
}

  return (
    <button onClick={deleteHandler}>Delete</button>
  )
}

export default DeleteButton