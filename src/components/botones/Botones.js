import { Link } from "react-router-dom";
import React from "react";
import Grid  from '@mui/material/Grid'

const Botones = ()=>{
    return(
        <Grid container>
            <Grid Item>
            <Link to="/InformacionPersonal"style={{marginLeft:'40px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Personal information
                </Link>
                <Link to="/ProyectosCreados"style={{marginLeft:'20px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Projects created
                </Link>
                <Link to="/RedesSociales"style={{marginLeft:'20px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Social networks
                </Link>
                <Link to="/TecnologiasAprendidas"style={{marginLeft:'20px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Technologies learned
                </Link>
                <Link to="/SolicitudesRecibidas"style={{marginLeft:'20px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Applications received
                </Link>     
            </Grid>
        </Grid>
    )
}

export default Botones