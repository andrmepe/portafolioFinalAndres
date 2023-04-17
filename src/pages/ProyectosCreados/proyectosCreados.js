import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
  color: '#323637',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));



const ProyectosCreados = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <img  src={Web1} alt='Web1' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'50px', marginTop:'5px', opacity: .4}}/>
        <img  src={Web2} alt='Web2' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'950px', marginTop:'290px', opacity: .4}}/>
        <img  src={Web3} alt='Web3' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'515px', marginTop:'170px', opacity: .4}}/>
        
            <Item>
            <Botones></Botones>
              <Typography fontSize={'35px'} marginTop={'50px'} color={'white'} variant="h5" gutterBottom>
                 Projects Created</Typography>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                {/* <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/peliculas-back' target='_blank' rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</a></Typography> */}

                <NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink>
                <NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                 </Grid> 
                <Grid item xs={6}>
                <NavLink to='https://github.com/andrmepe/fron-vehiculos' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/backendVehiculos' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/Primer-commit-FronUser' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/portafolio2' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                <NavLink to='https://github.com/andrmepe/portafolio' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</NavLink>
                </Grid>
                </Grid>      
            <Grid item xs={12} >
            <Item>
                <Typography color={'white'} variant="h5" gutterBottom>
                A whole world in your hands <KeyboardIcon/>
                </Typography> 
            <Grid  container spacing={2}>
            <Grid  item xs={12}>
            <Item>             
               <BotonPage></BotonPage>
               <BotonContactame></BotonContactame>
             </Item>
             </Grid>
             </Grid>   
            </Item>
            </Grid>
               
            </Item>
            </Grid>
      </Grid>
    )
}

export default ProyectosCreados