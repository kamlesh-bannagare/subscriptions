import './Chart.css';
import Chartbar from './Chartbar'
const Chart = (props)=>{
    const dataSetValues=props.dataSets.map(dataSet=>dataSet.value)
    const max=Math.max(...dataSetValues);
    return (
    <div className="chart">
        {props.dataSets.map((data)=>
        {return <Chartbar value={data.value} 
        label={data.label} 
        key={data.label} 
        maxValue={max}/>})}
    </div>
    )
}
export default Chart