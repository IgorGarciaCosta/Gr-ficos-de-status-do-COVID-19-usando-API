import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
//NativeSelect is to select the country
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'//importa a função

 const CountryPicker = ({handleCountryChange})=>{

    const [fetchedCountries, setFetchedCoutries] = useState([]);

    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchedCoutries(await fetchCountries())
        }

        fetchAPI();
    }, [setFetchedCoutries]);


     return(
         <FormControl className = {styles.formControl}>
             <NativeSelect defaultValue="" onChange = {(e)=>handleCountryChange(e.target.value)}>
                 <option value = "globel">Global</option>
                 {fetchedCountries.map((country, i)=><option key={i} value= {country}>{country}</option>)}
             </NativeSelect>
         </FormControl>
     )
 }

 export default CountryPicker;