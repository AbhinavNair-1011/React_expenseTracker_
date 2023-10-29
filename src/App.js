import ExpenseBody from './components/ExpenseBody';
import ExpenseInput from './components/ExpenseInput';
import './App.css';

function App() {

let array=[{name:"ok",price:"12"},{name:"ok",price:"12"},{name:"ok",price:"12"},{name:"ok",price:"12"},{name:"ok",price:"12"}]

  return (
    
    <div className='mainPage'>
      <h1 className='mainPage_title'>EXPENSE TRACKER</h1>
       <ExpenseInput/>                 
      <ExpenseBody expenses={array}/>
    </div>
  
  );
}

export default App;
