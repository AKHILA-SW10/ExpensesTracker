import React from 'react'
import './ChartBar.css';
const ChartBar=(props)=>{

  let barFillHt='0%';
  console.log("maxValue ",props.maxValue);
  if (props.maxValue>0){
    barFillHt=Math.round((props.value/props.maxValue)*100)+'%';
  }

return (
<div className="chart-bar">
<div className='chart-bar__inner'>
<div className='chart-bar__fill' style={{height:barFillHt}}></div>
{/*adding style dynamically*/}

<div className='chart-bar__label'>{props.label}</div>
</div>
</div>
)};
export default ChartBar;