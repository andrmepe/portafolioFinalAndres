import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import React, { Component }  from 'react';
import Network1 from '../assets/Network1.jpg'
import Network2 from '../assets/Network2.jpg'

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
    height: '50px',
  }));


const RedesSociales = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <img  src={Network1} style={{background:'#ffffff', borderRadius:'30px', width:'350px', 
        heigh:'150px', position:'fixed', marginTop:'65px', opacity: .4}}/>
         <img  src={Network2} style={{background:'#ffffff', borderRadius:'30px', width:'350px', 
        heigh:'150px', position:'fixed', marginLeft:'950px', marginTop:'67px', opacity: .4}}/>
            <Item>
            <Link href="/InformacionPersonal" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Personal information
                </Button>
            </Link>
            <Link href="/ProyectosCreados" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Projects created
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
            <Typography color={'white'} fontSize={'35px'} variant="h5" gutterBottom>
                 <p>In these networks you can find me</p></Typography>
                <Typography color={'white'} fontSize={'60px'} variant="h5" gutterBottom>
                 <a href="https://www.facebook.com/andres.m.perez.581" target={"_blank"}><FacebookIcon fontSize='30px' /></a>
                 <a href="https://www.linkedin.com/in/andres-mejia-374483240/" target={"_blank"}><LinkedInIcon fontSize='30px' /></a>
                 <a href="https://www.instagram.com/" target={"_blank"}><InstagramIcon fontSize='30px'   /></a>
                </Typography>   
            </Item>
                <Item2>           
                <Link href="/PaginaPrincipal" marginLeft={58}>
                <Button variant="outlined" style={{ border: '1px solid #0afdd7',color: "#0afdd7"}}>
                main page
                </Button>
                </Link>
                <Link href="/Contactanos" marginLeft={4}>
                  <Button variant="outlined" style={{ border: '1px solid #0afdd7', background:'#0afdd7', color: "black"}}>
                    Contact me!
                  </Button>
                </Link> 
                </Item2>
            </Grid>      
      </Grid>
    )
}

export default RedesSociales