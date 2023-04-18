import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Profile from '../assets/Profile.png'
import FondoNegro from '../assets/FondoNegro.jpg'
import Botones from '../../components/botones/Botones';
import BotonContactame from '../../components/botonContactame/BotonContactame.js';
import BotonPage from '../../components/botonPage/BotonPage';
import BotonRedesSociales from '../../components/botonRedesSociales/BotonRedesSociales';


const InformacionPersonal = () => {
    return (
        <Grid  container spacing={2} height='540px' style={{background:'black'}}>
            <Grid item xs={12}>
            <img fontSize={'50px'} src={FondoNegro} alt='FondoNegro' style={{background:'#ffffff', width:'470px', 
        heigh:'150px', position:'fixed', marginLeft:'50px', marginTop:'40px', marginBottom:'50px',borderRadius:'30px'}}/>
            <img fontSize={'50px'} src={Profile} alt='Profile' style={{background:'#ffffff', width:'350px', 
        heigh:'150px', position:'fixed', marginLeft:'880px', marginTop:'110px' ,borderRadius:'30px'}}/>
          <Grid ml='100px' mt='10px'><Botones></Botones></Grid>
            <Typography ml={'535px'} mt={'20px'} fontSize={'25px'} color={'#0afdd7'} variant="h3" gutterBottom>Hi</Typography>
            <Typography ml={'535px'} mt={'20px'} fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>I am a Developer</Typography>
            <Typography ml={'535px'} fontSize={'25px'} color={'white '} variant="h3" gutterBottom>____________________________</Typography>
            <Typography ml={'535px'} mt={'20px'} fontSize={'25px'} color={'#0afdd7'} variant="h3" gutterBottom>Andres Mejia</Typography>
                 <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} ml='520px' style={{color:'white', fontSize:'20px'}}>
                    <Grid  item xs={8}> Name: Andres Mejia </Grid>
                    <Grid item xs={8}>  Phone: 0451049712  </Grid>
                    <Grid item xs={8}>  E-mail: anmepe.sud@gmail.com </Grid>
                    <Grid item xs={8}>
                    <Typography>Redes sociales:</Typography>
                    <BotonRedesSociales></BotonRedesSociales>
                    </Grid>
                </Grid>
                </Box>        
            <Grid item xs={12} >
            <Grid  container spacing={2}>
            <Grid  item xs={12}>        
                <Grid ml='535px' mt='80px'>
                <BotonPage></BotonPage>
                <BotonContactame></BotonContactame>
                </Grid>
             </Grid>
             </Grid>   
            </Grid>
            </Grid>
      </Grid>
    )
}

export default InformacionPersonal