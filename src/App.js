import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const oldexpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  console.debug("mapping expenses item");

const [expenses,updateExpenses]=useState(oldexpenses);//passing intital value of expenses


const addExpenseHandler= (expense) =>{ //whenever new expense item is added we need to add it to expeses array for that we use state
  console.debug("new expense item need to be added added: ",expense);
  updateExpenses((prevExpenses)=>{
    console.log("new Array of expenses ",[...prevExpenses,expenses])
    return [...prevExpenses,expense]
  });
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import {createStore} from 'redux';
// import {useSelector,useDispatch} from 'react-redux';//for dispatching an actions we g
// import {inc,dec} from './Actions/actInd'
// // import dec from './Actions/actInd'


// // let store=createStore(reducer)
// //store->Globalized state
// //action->increment describes wht you want to do.. hugry doesnt mean u r buying food
// // returns object
// //reducer how actions transform ur state into next state
// //dispatch dispatch action to reducer..
// // reducer receives it and decodes action

// //action
// // const incr=()=>{
// //   return{
// //     type:'INC'
// //   }
// // }

// // const decr=()=>{
// //   return{
// //     type:'DEC'
// //   }
// // }

// // //reducer
// // const counter=(state=0,action)=>{
// //   switch(action.type){
// //     case "INC": return state+1;
// //     case "DEC":return state-1;
// //   }
// // };

// // // createStore(reducer, [preloadedState], [enhancer])
// // let store=createStore(counter); 
// // store.subscribe(()=>console.log(store.getState()));//subscribe to the changes to its state to update the UI.
// // store.dispatch(decr());


// function App() {
//   const counter=useSelector(state=>state.counter);
//   const isLogged=useSelector(state=>state.isLogged);
//   const dispatch=useDispatch();

//   return (
//     <div className="App">      
//     <h1> Counter {counter}</h1>
//     <button onClick={()=>dispatch(inc())}>+</button>
//     <button onClick={()=>dispatch(dec())}>-</button>
//     </div>
//   );
// }

// export default App;
