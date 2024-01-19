import React from 'react'

const DeleteButton = () => {

let deleteHandler=()=>{
alert("clicked")
}

  return (
    <button onClick={deleteHandler}>Delete</button>
  )
}

export default DeleteButton