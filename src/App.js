import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'
import corongaImage from './images/coronga.png'


class App extends React.Component{
    state = {//this state is used to put my data from the api to the functions
        data: {},
        country: '',
    }

    //in the componentDidMount function, the async position is different
    async componentDidMount(){
        const fetchedData = await fetchData();//pass the api data to the variable

        this.setState({data:fetchedData});//put the variable value (from the api) inside the state i created before
    }

    handleCountryChange = async (country)=>{
        //fetch the data and set the state

        const fetchedData = await fetchData(country);//pass the api data to the variable
        this.setState({data:fetchedData, country: country});
        
    }

    render(){

        const{data, country} = this.state;//catch the data from the setState

        return(
            <div className={styles.container}>
                <img className={styles.image} src={corongaImage} alt = {'Coronga'}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data= {data} country = {country}/>
            </div>
        )
    }
}

export default App;