import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import React from 'react';
import Web1 from '../assets/Web1.png';
import Web2 from '../assets/Web2.png';
import Web3 from '../assets/Web3.png';
import { NavLink } from 'react-router-dom';
import Botones from '../../components/botones/Botones';
import BotonContactame from '../../components/botonContactame/BotonContactame.js';
import BotonPage from '../../components/botonPage/BotonPage';

const ProyectosCreados = () => {
    return (
        <Grid container spacing={2} style={{background:'black'}}>
            <Grid item xs={12}>
            <img  src={Web1} alt='Web1' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'40px', marginTop:'50px', opacity: .4}}/>
        <img  src={Web2} alt='Web2' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'950px', marginTop:'290px', opacity: .4}}/>
        <img  src={Web3} alt='Web3' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'515px', marginTop:'170px', opacity: .4}}/>
            <Grid mt='20px' ml='100px'><Botones></Botones></Grid>
              <Typography fontSize={'35px'} mt='60px' ml='490px' mb='30px' color={'white'} variant="h5" gutterBottom>
                 Projects Created</Typography>
                <Grid container spacing={2} ml='150px'>
                <Grid item xs={6}>
                <Grid><NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink></Grid>
                </Grid>
                <Grid item xs={6}>
                <Grid><NavLink to='https://github.com/andrmepe/fron-vehiculos' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/backendVehiculos' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/Primer-commit-FronUser' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/portafolio2' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/portafolio' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink></Grid>
                </Grid>
                </Grid>      
            <Grid item xs={12} mt='40px' ml='460px'>
                <Typography color={'white'} variant="h5" gutterBottom>
                A whole world in your hands <KeyboardIcon/>
                </Typography> 
            <Grid  container spacing={2} >
            <Grid  item xs={12} mb='20px' mt='20px' ml='50px'>             
               <BotonPage></BotonPage>
               <BotonContactame></BotonContactame>
             </Grid>
             </Grid>   
            </Grid>
            </Grid>
      </Grid>
    )
}

export default ProyectosCreados