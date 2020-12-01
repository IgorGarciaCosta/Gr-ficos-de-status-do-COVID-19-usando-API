import React, {useState, useEffect} from 'react';
import {fetchDailyData}from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

 const Charts = ()=>{
     const [dailyData, setDailyData] = useState([]);
     useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
     });

     const lineChart = (
        dailyData.length?//is the first date avaliable?
        (<Line 
            data={{
                labels:dailyData.map(({date})=>date),//returns an array of all the dates
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill: true,//fill the space below the chart
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Infected',
                    borderColor:'red',
                    backgroundColor:'rgba(255, 0, 0, 0.5)',
                    fill: true,//fill the space below the chart
                }],
            }}
        />)//return the LineChart
        ://if the data is not fetched yet
        null

     );

     return(
         <div className={styles.container}>
             {lineChart}
         </div>
     )
 }

 export default Charts;