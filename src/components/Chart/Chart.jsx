import React, {useState, useEffect} from 'react';
import {fetchDailyData}from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

 const Charts = ({data:{confirmed, recovered, deaths}, country})=>{
     const [dailyData, setDailyData] = useState([]);
     useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
     },[]);//this empty array makes the useEffect run just once
     //he behave like a componentDidMount

     const lineChart = (
        dailyData.length?//is the first date avaliable?
        (<Line 
            data={{
                labels:dailyData.map(({date})=>date),//returns an array of all the dates
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infectados',
                    borderColor:'#3333ff',
                    fill: true,//fill the space below the chart
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Mortos',
                    borderColor:'red',
                    backgroundColor:'rgba(255, 0, 0, 0.5)',
                    fill: true,//fill the space below the chart
                }],
            }}
        />)//return the LineChart
        ://if the data is not fetched yet
        null

     );


    console.log(confirmed.value, recovered.value, deaths.value)

     const barChart = (//this is a JSX structure
        confirmed?//the data exists?
            (
                <Bar
                    data = {{
                        labels:['Infectados', 'Recuperados', 'Mortos'],
                        datasets: [{
                            label: 'Pessoas',
                            backgroundColor:[
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data:[confirmed.value, recovered.value, deaths.value]
                        }]
                    }}

                    options = {{
                        legend: {display:false},
                        title:{display:true, text:`Estado atual em ${country}`}
                    }}
                />
            ):null

     );

     return(
         <div className={styles.container}>
             {country? barChart:lineChart}
         </div>
     )
 }

 export default Charts;