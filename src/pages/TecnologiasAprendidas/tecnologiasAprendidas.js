import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardIcon from '@mui/icons-material/Keyboard';
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

const TecnologiasAprendidad = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Item>
               <Typography fontSize={'35px'} color={'white'} variant="h5" gutterBottom>
                 <p>I am a Full stack Developer who handles the following technologies</p></Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom><p>Javascript</p></Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom><p>Hypertext Markup Language</p></Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom><p>Cascading Style Sheets</p></Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom><p>code</p></Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom><p>mysql</p></Typography>
                 <Typography color={'#0afdd7'} variant="h3" gutterBottom><JavascriptIcon fontSize='30px' />
                 <HtmlIcon fontSize='30px'/><CssIcon fontSize='30px'/><CodeIcon fontSize='30px'/></Typography>           
            <Grid item xs={12} >
            <Item>
                <Typography color={'white'} variant="h5" gutterBottom>
                A whole world in your hands <KeyboardIcon/>
                </Typography> 
            <Grid  container spacing={2}>
            <Grid  item xs={12}>
            <Item>             
                <Link href="/PaginaPrincipal" marginLeft={4}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "#0afdd7"}}>
                main page
                </Button>
                </Link>
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

export default TecnologiasAprendidad