import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import Contact from '../assets/Contact.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
  color: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontSize:'16px',
  
}));


const Contactanos = () => {
    return (
        <Grid  container spacing={2}>
            <Grid item xs={12}>
            <img  src={Contact} alt='Contact' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'430px', marginTop:'200px', opacity: .4}}/>
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
            <Typography marginLeft={'175px'} fontSize={'20px'} color={'#ff0080'} variant="h3" gutterBottom><p>Please fill out the quick form and we will be in touch soon</p></Typography>
            
            
            <Grid  container spacing={2}>
            <Grid item xs={6}>
            <Box component="form"
                sx={{ backgroundColor:'white', marginLeft:'175px' , width:'230px',
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="filled-basic" label="Nombre" variant="filled" />
                <TextField id="filled-basic" label="Apellido" variant="filled" />
                <TextField id="filled-basic" label="Phone number" variant="filled" />
                <TextField id="filled-basic" label="E-mail" variant="filled" />
                <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue=""
                variant="filled"
                />
                <input type='submit' value={'Send'}/>
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid  marginLeft={'10px'} container spacing={2}>
                    <Grid  item xs={8}> <Item  >Name: Andres Mejia</Item>  </Grid>
                    <Grid item xs={8}>  <Item>Phone: 0451049712</Item>     </Grid>
                    <Grid item xs={8}>  <Item>E-mail: anmepe.sud@gmail.com</Item>  </Grid>
                    <Grid item xs={8}>
                    <Typography><Item> Redes sociales:<a href="https://www.facebook.com/andres.m.perez.581" target={"_blank"}><FacebookIcon  fontSize='30px' /></a>
                 <a href="https://www.linkedin.com/in/andres-mejia-374483240/" target={"_blank"}><LinkedInIcon fontSize='30px' /></a>
                 <a href="https://www.instagram.com/" target={"_blank"}><InstagramIcon fontSize='30px'   /></a></Item></Typography>
                    </Grid>
                </Grid>
            <Item>             
                <Link href="/PaginaPrincipal" marginLeft={3}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "#0afdd7"}}>
                main page</Button></Link>
             </Item>
                </Box>
                </Grid>
                </Grid>    
            <Grid  container spacing={2}>
            <Grid  item xs={12}>
             </Grid>
             </Grid>   
            </Item>
            </Grid>
      </Grid>
    )
}

export default Contactanos