import axios from 'axios';//used to make api requests

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async()=>{
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);//get the url data
        
        
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch (error){

    }
}
