import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import React from 'react';
import BotonContactame from '../../components/botonContactame/BotonContactame';
import Botones from '../../components/botones/Botones';
import BotonPage from '../../components/botonPage/BotonPage';


const TecnologiasAprendidad = () => {
    return (
        <Grid container spacing={2} style={{background:'black'}}>
            <Grid item xs={12} mt='20px' mb='30px'>
            <Grid ml='80px'><Botones></Botones></Grid>
               <Typography fontSize={'30px'} mt='40px' ml='120px' color={'white'} variant="h5" gutterBottom>
                 I am a Full stack Developer who handles the following technologies</Typography>
                 <Grid ml='120px' mt='20px'>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>Javascript </Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>Hypertext Markup Language</Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>Cascading Style Sheets</Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>code</Typography>
                 <Typography fontSize={'25px'} color={'#ff0080'} variant="h3" gutterBottom>mysql</Typography>
                 <Typography color={'#0afdd7'} variant="h3" gutterBottom><JavascriptIcon fontSize='30px' />
                 <HtmlIcon fontSize='30px'/><CssIcon fontSize='30px'/><CodeIcon fontSize='30px'/></Typography>           
            <Grid item xs={12} >
                <Typography color={'white'} variant="h5" gutterBottom>
                A whole world in your hands <KeyboardIcon/>
                </Typography> 
            <Grid  container spacing={2}>
            <Grid  item xs={12} mt='20px'>           
              <BotonPage></BotonPage>
              <BotonContactame></BotonContactame>
             </Grid>
             </Grid>   
                 </Grid>
            </Grid>
            </Grid>
      </Grid>
    )
}

export default TecnologiasAprendidad