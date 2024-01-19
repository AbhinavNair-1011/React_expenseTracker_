import ExpenseBody from './components/ExpenseBody';
import ExpenseInput from './components/ExpenseInput';
import './App.css';
import { useState } from 'react';

function App() {

const [array,setArray]=useState([]);

const addExpense=(data)=>{
  console.log(data)
  
  setArray([...array,data])
   
}
const deleteExpense=(data)=>{

  let deletedArray=array.filter((item)=>{
      return item.expenseName!=data.name
  })
  setArray(deletedArray)
}
  return (
    
    <div className='mainPage'>
      <h1 className='mainPage_title'>EXPENSE TRACKER</h1>
       <ExpenseInput addExpense={addExpense}/>                 
      <ExpenseBody deleteExpense={deleteExpense} expenses={array}/>
    </div>
  
  );
}

export default App;
