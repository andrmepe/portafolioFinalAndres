import { Grid } from "@mui/material"
import { Link } from "react-router-dom";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import Typography from '@mui/material/Typography';
import React  from 'react';
import Programmer2 from '../assets/Programmer2.png'
import Botones from "../../components/botones/Botones.js";
import BotonContactame from "../../components/botonContactame/BotonContactame";

const PaginaPrincipal = () => {
    return (
    <Grid container spacing={2}  alignContent={'center'} mt='30px'  style={{ background: 'black' }}>
        <Grid item xs={12}>
        <Link to="/Login"style={{marginLeft:'40px', fontSize:'20px', 
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Login
                </Link>
        <img  src={Programmer2} alt="programmer2" style={{background:'#ffffff', borderRadius:'30px', border:'0px' ,width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'620px', marginTop:'90px'}}/>
            
                <Typography  variant="h3" color={"white"} mt={2} marginLeft={5} gutterBottom style={{ background: 'black' }}>
                    Andres Mejia  
                </Typography>
                <Typography variant="h3" mt={2} marginLeft={5} color="#ff0080" marginBottom={10}> Full stack Developer - Enyoi <LaptopWindowsIcon fontSize="16px"/> </Typography>   
                <Botones></Botones>
           </Grid>
        <Grid mt={6} container marginBottom='20px'>
                    <Grid item xs={12}/>
                            <Typography variant="h5" marginLeft={5} gutterBottom style={{ background: 'black', color:'white' }}>
                                For more information do not hesitate to contact me
                            </Typography>
                           <BotonContactame></BotonContactame>
                </Grid>
    </Grid>
    
    )
}

export default PaginaPrincipal