import { Grid } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { Component }  from 'react';
import Programmer from '../assets/Programmer.jpg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#BCE8EE',
    color: '#323637',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000033',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

const PaginaPrincipal = () => {
    return (
    <Grid container spacing={2} height='500px' alignContent={'center'} marginTop='30px'  style={{ background: '#0d0d0d' }}>
        <Grid item xs={12}>
        <img  src={Programmer} style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'750px', marginTop:'60px', opacity: .4}}/>
            <item>
                <Typography  variant="h3" color={"white"} mt={2} marginLeft={5} gutterBottom style={{ background: '#0d0d0d' }}>
                    Andres Mejia  
                </Typography>
                <Typography variant="h3" mt={2} marginLeft={5} color="#ff0080" marginBottom={10}> Full stack Developer - Enyoi <LaptopWindowsIcon fontSize="16px"/>     </Typography> 
                
            </item>
            
                 
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
           </Grid>
        <Grid mt={6} container marginBottom='20px'>
                    <Grid item xs={12}/>
                    
                        <Item2 style={{ background: '#0d0d0d' }}>
                            <Typography variant="h5" marginLeft={5} gutterBottom style={{ background: '#0d0d0d' }}>
                                <p> For more information do not hesitate to contact me </p>
                            </Typography>
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

export default PaginaPrincipal