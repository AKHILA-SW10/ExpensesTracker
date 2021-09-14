import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList=(props)=>{
       if(props.items.length==0){
            return <h3 className='expenses-list__fallback'> No expenses found </h3>;
       } else{
            return props.items.map(expense=>(
                <ExpenseItem 
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount} 
                  date={expense.date} 
                />
                ));
       }
    //    return props.items.length==0?<h3 style={{color:'green'}}>No data found </h3>:
    //    props.items.map(expense=>(
    //     <ExpenseItem 
    //       // key={expense.id}
    //       title={expense.title}
    //       amount={expense.amount} 
    //       date={expense.date} 
    //     />
    //     ));
};

export default ExpensesList;