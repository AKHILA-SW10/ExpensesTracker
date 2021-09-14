import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isFormHide,setAddExpense]=useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.debug("saveExpensesDataHandler.. ",props);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setAddExpense(!isFormHide);
  };

  const disableForm=()=>{
    setAddExpense(!isFormHide);
  }

  
  return (
    <div className='new-expense'>
      {isFormHide?<button onClick={disableForm}>Add Expense </button>:
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={disableForm}/>}
    </div>
  );
};

export default NewExpense;
