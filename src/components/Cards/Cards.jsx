import React from 'react';
import {Card, CardContent, Typography, Grid}from '@material-ui/core';
import styles from './Cards.module.css';


 const Cards = (props)=>{



     return(
         <div className = {styles.container}>
             <Grid container spacing = {3} justify = "center">
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">DADOS REAIS</Typography>
                        <Typography color="textSecondary">DATA REAL</Typography>
                        <Typography variant="body2"> Numeros de casos ativos de CORONGA</Typography>
                    </CardContent>

                </Grid>

                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">DADOS REAIS</Typography>
                        <Typography color="textSecondary">DATA REAL</Typography>
                        <Typography variant="body2"> Numeros de Recuperados de CORONGA</Typography>
                    </CardContent>

                </Grid>

                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortos</Typography>
                        <Typography variant="h5">DADOS REAIS</Typography>
                        <Typography color="textSecondary">DATA REAL</Typography>
                        <Typography variant="body2"> Numeros de mortos de CORONGA</Typography>
                    </CardContent>

                </Grid>
            </Grid>    

         </div>
     )
 }

 export default Cards;