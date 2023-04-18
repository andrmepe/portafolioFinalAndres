import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Profile from '../assets/Profile.png'
import FondoNegro from '../assets/FondoNegro.jpg'
import Botones from '../../components/botones/Botones';
import BotonContactame from '../../components/botonContactame/BotonContactame.js';
import BotonPage from '../../components/botonPage/BotonPage';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BotonRedesSociales from '../../components/botonRedesSociales/BotonRedesSociales';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
  color: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontSize:'16px',
  
}));

const InformacionPersonal = () => {
    return (
        <Grid  container spacing={2}>
            <Grid item xs={12}>
            <img fontSize={'50px'} src={FondoNegro} alt='FondoNegro' style={{background:'#ffffff', width:'470px', 
        heigh:'150px', position:'fixed', marginLeft:'50px', marginTop:'40px', marginBottom:'50px',borderRadius:'30px'}}/>
            <img fontSize={'50px'} src={Profile} alt='Profile' style={{background:'#ffffff', width:'350px', 
        heigh:'150px', position:'fixed', marginLeft:'880px', marginTop:'110px' ,borderRadius:'30px'}}/>
            <Item>
          <Grid ml='100px'><Botones></Botones></Grid>
            <Typography ml={'545px'} mt={'20px'} fontSize={'25px'} color={'#0afdd7'} variant="h3" gutterBottom>Hi</Typography>
            <Typography ml={'545px'} mt={'20px'} fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>I am a Developer</Typography>
            <Typography ml={'545px'} fontSize={'25px'} color={'white '} variant="h3" gutterBottom>____________________________</Typography>
            <Typography ml={'545px'} mt={'20px'} fontSize={'25px'} color={'#0afdd7'} variant="h3" gutterBottom>Andres Mejia</Typography>
                 <Box sx={{ flexGrow: 1 }}>
                <Grid  marginLeft={'520px'} container spacing={2}>
                    <Grid  item xs={8}> <Item  >Name: Andres Mejia</Item>  </Grid>
                    <Grid item xs={8}>  <Item>Phone: 0451049712</Item>     </Grid>
                    <Grid item xs={8}>  <Item>E-mail: anmepe.sud@gmail.com</Item>  </Grid>
                    <Grid item xs={8}>
                    <Typography>Redes sociales:</Typography>
                    <BotonRedesSociales></BotonRedesSociales>
                    </Grid>
                </Grid>
                </Box>        
            <Grid item xs={12} >
            <Item>
            <Grid  container spacing={2}>
            <Grid  item xs={12}>
            <Item>             
                <Grid ml='520px'>
                <BotonPage></BotonPage>
                <BotonContactame></BotonContactame>
                </Grid>
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

export default InformacionPersonal