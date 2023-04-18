import { Link } from "react-router-dom"
import React from "react"
import { Grid } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const BotonRedesSociales = ()=>{
    return(
<Grid>
<Link to="https://www.facebook.com/andres.m.perez.581" style={{color:'#0afdd7'}} target={"_blank"}><FacebookIcon /></Link>
<Link to="https://www.linkedin.com/in/andres-mejia-374483240/" style={{color:'#0afdd7'}} target={"_blank"}><LinkedInIcon /></Link>
<Link to="https://www.instagram.com/" style={{color:'#0afdd7'}} target={"_blank"}><InstagramIcon /></Link>
<Link to="https://wa.link/vok4hw" style={{color:'#0afdd7'}} target={"_blank"}rel=' noopener noreferrer'><WhatsAppIcon /></Link>
</Grid>
    )
}

export default BotonRedesSociales