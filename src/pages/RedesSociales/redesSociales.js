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
            <Item>
                <Typography color={'white'} fontSize={'35px'} variant="h5" gutterBottom>
                 <p>In these networks you can find me</p>
                 <a href="https://www.facebook.com/" target={"_blank"}><FacebookIcon  fontSize='30px' /></a>
                 <a href="https://www.linkedin.com/feed/" target={"_blank"}><LinkedInIcon fontSize='30px' /></a>
                 <a href="https://www.instagram.com/" target={"_blank"}><InstagramIcon fontSize='30px'   /></a>
                </Typography>   
            </Item>
                <Item2>           
                <Link href="/PaginaPrincipal" marginLeft={4}>
                <Button variant="outlined" style={{ border: '1px solid #0afdd7',color: "#0afdd7"}}>
                main page
                </Button>
                </Link>
                </Item2>
            </Grid>      
      </Grid>
    )
}

export default RedesSociales