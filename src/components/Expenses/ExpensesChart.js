import React from 'react';
import Chart from '../Charts/Chart';

const ExpensesChart=(props)=>{
    const dataPoints=[
        {label:'JAN',value:0},
        {label:'FEB',value:0},
        {label:'MARCH',value:0},
        {label:'APRIL',value:0},
        {label:'MAY',value:0},
        {label:'JUNE',value:0},
        {label:'JULY',value:0},
        {label:'AUG',value:0},
        {label:'SEPT',value:0},
        {label:'OCT',value:0},
        {label:'NOV',value:0},
        {label:'DEC',value:0},
    ];

    for(const expense of props.expenses){
        const expenseMon=expense.date.getMonth();
        dataPoints[expenseMon].value+=expense.amount;
    }
    return <Chart dataPoints={dataPoints}/> 
}
export default ExpensesChart;