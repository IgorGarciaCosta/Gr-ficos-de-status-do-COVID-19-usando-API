import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'


class App extends React.Component{
    state = {//this state is used to put my data from the api to the functions
        data: {},
    }

    //in the componentDidMount function, the async position is different
    async componentDidMount(){
        const fetchedData = await fetchData();//pass the api data to the variable

        this.setState({data:fetchedData});//put the variable value (from the api) inside the state i created before
    }
    render(){

        const{data} = this.state;//catch the data from the setState

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;