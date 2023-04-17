import { Grid } from "@mui/material"
import { Link } from "react-router-dom";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React  from 'react';
import Programmer2 from '../assets/Programmer2.png'
import Botones from "../../components/botones/Botones.js";
import BotonContactame from "../../components/botonContactame/BotonContactame";


  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000033',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

const PaginaPrincipal = () => {
    return (
    <Grid container spacing={2}  alignContent={'center'} marginTop='30px'  style={{ background: 'black' }}>
        <Grid item xs={12}>
        <Link to="/Login"style={{marginLeft:'40px', fontSize:'20px', 
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Login
                </Link>
        <img  src={Programmer2} alt="programmer2" style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'750px', marginTop:'60px', opacity: .4}}/>
            
                <Typography  variant="h3" color={"white"} mt={2} marginLeft={5} gutterBottom style={{ background: 'black' }}>
                    Andres Mejia  
                </Typography>
                <Typography variant="h3" mt={2} marginLeft={5} color="#ff0080" marginBottom={10}> Full stack Developer - Enyoi <LaptopWindowsIcon fontSize="16px"/> </Typography>   
                <Botones></Botones>
           </Grid>
        <Grid mt={6} container marginBottom='20px'>
                    <Grid item xs={12}/>
                    
                        <Item2 style={{ background: '#0d0d0d' }}>
                            <Typography variant="h5" marginLeft={5} gutterBottom style={{ background: 'black' }}>
                                For more information do not hesitate to contact me
                            </Typography>
                           <BotonContactame></BotonContactame>
                        </Item2>
                    
                </Grid>
    </Grid>
    
    )
}

export default PaginaPrincipal