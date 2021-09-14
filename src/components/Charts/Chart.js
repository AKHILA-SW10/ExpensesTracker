import ChartBar from './ChartBar'
import './Chart.css'
const Chart=(props)=>{
  const vals=props.dataPoints.map(dataPoint=>dataPoint.value)
  const totalMax=Math.max(...vals);
  return (
    <div className='chart'>
    {props.dataPoints.map((dPt)=>(
      <ChartBar
        key={dPt.label}
        value={dPt.value}
        maxValue={totalMax}
        label={dPt.label}
      />
    ))}
    </div>
  );
};

export default Chart;