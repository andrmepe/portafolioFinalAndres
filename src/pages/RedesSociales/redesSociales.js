import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import React from 'react';
import Network1 from '../assets/Network1.jpg'
import Network2 from '../assets/Network2.jpg'
import Botones from '../../components/botones/Botones';
import BotonContactame from '../../components/botonContactame/BotonContactame';
import BotonPage from '../../components/botonPage/BotonPage';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Gif } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#0d0d0d' : '#0d0d0d',
  color: '#323637',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#0d0d0d',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: '110px',
  }));


const RedesSociales = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <img  src={Network1} alt='Network1' style={{background:'#ffffff', borderRadius:'30px', width:'350px', 
        heigh:'150px', position:'fixed', marginTop:'65px', opacity: .4}}/>
         <img  src={Network2} alt='Network2' style={{background:'#ffffff', borderRadius:'30px', width:'350px', 
        heigh:'150px', position:'fixed', marginLeft:'950px', marginTop:'67px', opacity: .4}}/>
            <Item>
           <Grid marginLeft='90px'><Botones></Botones></Grid>
            <Typography color={'white'} fontSize={'35px'} mb='50px' mt='30px' variant="h5" gutterBottom>
                 In these networks you can find me</Typography>
                 <Link to="https://www.facebook.com/andres.m.perez.581" style={{color:'#0afdd7'}} target={"_blank"} rel=' noopener noreferrer'><FacebookIcon style={{fontSize:'60px'}}/></Link>
                 <Link to="https://www.linkedin.com/in/andres-mejia-374483240/" style={{color:'#0afdd7'}}target={"_blank"} rel=' noopener noreferrer'><LinkedInIcon style={{fontSize:'60px'}}/></Link>
                 <Link to="https://www.instagram.com/" style={{color:'#0afdd7'}}target={"_blank"} rel=' noopener noreferrer'><InstagramIcon style={{fontSize:'60px'}}/></Link>
                 <Link to="https://wa.link/vok4hw" style={{color:'#0afdd7'}} target={"_blank"}rel=' noopener noreferrer'><WhatsAppIcon style={{fontSize:'60px'}}/></Link>
            </Item>
                <Item2>           
                <Grid ml='450px' mt='40px'>
                <BotonPage></BotonPage>
                <BotonContactame></BotonContactame>
                </Grid>
                </Item2>
            </Grid>      
      </Grid>
    )
}

export default RedesSociales