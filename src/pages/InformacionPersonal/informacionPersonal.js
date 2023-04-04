import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import React, { Component }  from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Profile from '../assets/Profile.png'
import FondoNegro from '../assets/FondoNegro.jpg'


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
            <img fontSize={'50px'} src={FondoNegro} style={{background:'#ffffff', width:'500px', 
        heigh:'150px', position:'fixed', marginLeft:'50px', borderRadius:'30px'}}/>
            <img fontSize={'50px'} src={Profile} style={{background:'#ffffff', width:'350px', 
        heigh:'150px', position:'fixed', marginLeft:'880px', marginTop:'110px' ,borderRadius:'30px'}}/>
            <Item>
            <Link href="/ProyectosCreados" marginLeft={25} >
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Projects created
                </Button>
            </Link>
            <Link href="/RedesSociales" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Social networks
                </Button>
            </Link>
            <Link href="SolicitudesRecibidas" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Applications received
                </Button>
            </Link>
            <Link href="/TecnologiasAprendidas" marginLeft={4}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "white"}}>
                Technologies learned
                </Button>
            </Link>
            <Typography marginLeft={'545px'} fontSize={'25px'} color={'#0afdd7'} variant="h3" gutterBottom><p>Hi</p></Typography>
            <Typography marginLeft={'545px'} fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom><p> I am a Developer</p></Typography>
            <Typography marginLeft={'545px'} fontSize={'25px'} color={'white '} variant="h3" gutterBottom><p>____________________________</p></Typography>
            <Typography marginLeft={'545px'} fontSize={'25px'} color={'#0afdd7'} variant="h3" gutterBottom><p>Andres Mejia</p></Typography>
                 <Box sx={{ flexGrow: 1 }}>
                <Grid  marginLeft={'520px'} container spacing={2}>
                    <Grid  item xs={8}> <Item  >Name: Andres Mejia</Item>  </Grid>
                    <Grid item xs={8}>  <Item>Phone: 0451049712</Item>     </Grid>
                    <Grid item xs={8}>  <Item>E-mail: anmepe.sud@gmail.com</Item>  </Grid>
                    <Grid item xs={8}>
                    <Typography><Item> Redes sociales:<a href="https://www.facebook.com/" target={"_blank"}><FacebookIcon  fontSize='30px' /></a>
                 <a href="https://www.linkedin.com/feed/" target={"_blank"}><LinkedInIcon fontSize='30px' /></a>
                 <a href="https://www.instagram.com/" target={"_blank"}><InstagramIcon fontSize='30px'   /></a></Item></Typography>
                    </Grid>
                </Grid>
                </Box>        
            <Grid item xs={12} >
            <Item>
            <Grid  container spacing={2}>
            <Grid  item xs={12}>
            <Item>             
                <Link href="/PaginaPrincipal" marginLeft={65}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "#0afdd7"}}>
                main page</Button></Link>
                <Link href="/Contactanos" marginLeft={4}>
                <Button variant="outlined" style={{ border: '1px solid #0afdd7', background:'#0afdd7', color: "black"}}>
                Contact me!</Button></Link> 
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