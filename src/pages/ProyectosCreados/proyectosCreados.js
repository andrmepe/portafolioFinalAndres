import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import React from 'react';
import Web1 from '../assets/Web1.png';
import Web2 from '../assets/Web2.png';
import Web3 from '../assets/Web3.png';

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
            <Link href="/InformacionPersonal" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Personal information
                </Button>
            </Link>
            <Link href="/RedesSociales" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Social networks
                </Button>
            </Link>
            <Link href="/TecnologiasAprendidas" marginLeft={4}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "white"}}>
                Technologies learned
                </Button>
            </Link>
            <Link href="SolicitudesRecibidas" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Applications received
                </Button>
            </Link>
               <Typography fontSize={'35px'} marginTop={'50px'} color={'white'} variant="h5" gutterBottom>
                 <p>Projects Created</p></Typography>
                 <Grid container spacing={2}>
                    <Grid item xs={6}>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/peliculas-back' target='_blank' rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/peliculas-back' target='_blank' rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/peliculas-back' target='_blank' rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/peliculas-back' target='_blank' rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</a></Typography>

                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/peliculas-back' target='_blank' rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back</a></Typography>
                 </Grid> 
                <Grid item xs={6}>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/fron-vehiculos' target='_blank' rel='noopener noreferrer'>https://github.com/andrmepe/fron-vehiculos</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/backendVehiculos' target='_blank' rel='noopener noreferrer'>https://github.com/andrmepe/backendVehiculos</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/Primer-commit-FronUser' target='_blank' rel='noopener noreferrer'>https://github.com/andrmepe/Primer-commit-FronUser</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/portafolio2' target='_blank' rel='noopener noreferrer'>https://github.com/andrmepe/portafolio2</a></Typography>
                 <Typography fontSize={'15px'} color={'#ff0080'} variant="h3" gutterBottom><a 
                 href='https://github.com/andrmepe/portafolio' target='_blank' rel='noopener noreferrer'>https://github.com/andrmepe/portafolio</a></Typography>     
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
                <Link href="/PaginaPrincipal" marginLeft={4}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "#0afdd7"}}>
                main page
                </Button>
                </Link>
                <Link href="/Contactanos" marginLeft={4}>
                <Button variant="outlined" style={{ border: '1px solid #0afdd7', background:'#0afdd7', color: "black"}}>
                  Contact me!
                 </Button>
                </Link>
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