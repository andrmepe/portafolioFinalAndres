import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Network1 from '../assets/Network1.jpg'
import Network2 from '../assets/Network2.jpg'
import Botones from '../../components/botones/Botones';
import BotonContactame from '../../components/botonContactame/BotonContactame';
import BotonPage from '../../components/botonPage/BotonPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const RedesSociales = () => {
    return (
        <Grid container spacing={2} style={{background:'black'}}>
            <Grid item xs={12}>
            <img  src={Network1} alt='Network1' style={{background:'#ffffff', borderRadius:'30px', width:'350px', 
        heigh:'150px', position:'fixed', marginTop:'65px', opacity: .4}}/>
         <img  src={Network2} alt='Network2' style={{background:'#ffffff', borderRadius:'30px', width:'350px', 
        heigh:'150px', position:'fixed', marginLeft:'950px', marginTop:'67px', opacity: .4}}/>

           <Grid ml='90px' mt='20px'><Botones ></Botones></Grid>
            <Typography color={'white'} fontSize={'35px'} mb='50px' ml='380px' mt='30px' variant="h5" gutterBottom>
                 In these networks you can find me</Typography>
                 <Link to="https://www.facebook.com/andres.m.perez.581" style={{color:'#0afdd7'}} target={"_blank"}>
                  <FacebookIcon style={{fontSize:'70px', marginLeft:'480px'}}/></Link>
                 <Link to="https://www.linkedin.com/in/andres-mejia-374483240/" style={{color:'#0afdd7'}} target={"_blank"}>
                  <LinkedInIcon style={{fontSize:'70px', marginLeft:'20px'}}/></Link>
                 <Link to="https://www.instagram.com/" style={{color:'#0afdd7'}} target={"_blank"}>
                  <InstagramIcon style={{fontSize:'70px', marginLeft:'20px'}} /></Link>
                 <Link to="https://wa.link/vok4hw" style={{color:'#0afdd7'}} target={"_blank"}rel=' noopener noreferrer'>
                  <WhatsAppIcon style={{fontSize:'70px', marginLeft:'20px'}} /></Link>          
                <Grid ml='520px' mt='50px' mb='30px'>
                <BotonPage></BotonPage>
                <BotonContactame></BotonContactame>
                </Grid>
            </Grid>      
      </Grid>
    )
}

export default RedesSociales