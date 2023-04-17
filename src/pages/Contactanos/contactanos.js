import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TextField from '@mui/material/TextField';
import Contact from '../assets/Contact.png'
import axios from 'axios';
import { Alert } from '@mui/material';
import Botones from '../../components/botones/Botones';
import BotonPage from '../../components/botonPage/BotonPage';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
  color: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontSize:'16px',
  
}));

const Contactanos = ({name, setName, lastName, setLastName, phone, setPhone,email, setEmail,message, setMessage}) => {
    const [showAlertSucces, setShowAlertSucces] = useState(false)
    const [showAlertFiels, setShowAlertFiels] = useState(false)
   

  /*   const clearFiels =()=>{
        setName('')
        setLastName('')
        setPhone('')
        setEmail('')
        setMessage('')
    } */

    const timeShowAlertSucces = ()=>{
        setTimeout(()=>{
            setShowAlertSucces(false)
        }, 2000)
    }
    
    const timeShowAlertFiels = ()=>{
        setTimeout(()=>{
            setShowAlertFiels(false)
        }, 2000)
    }

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value)
    }
    /* console.log(name, lastName, phone, email, message) */
    const handleSubmit =(e)=>{
        e.preventDefault()
         if(name === '' || lastName === '' || phone === '' || email === '' || message === ''){
            setShowAlertFiels(true)
            timeShowAlertFiels()
            console.log('entro if')
        } else {
            console.log('entro else')
            axios.post('http://localhost:3001/contactanos/createRequest', {
                name: name,
                lastname: lastName,
                phone: phone,
                email: email,
                message: message
            }).then ((res)=>{
                setName('')
                setLastName('')
                setPhone('')
                setEmail('')
                setMessage('')
                setShowAlertSucces(true)
                timeShowAlertSucces()
                /* clearFiels() */
            })
        }
    }
    console.log(name, lastName, phone, email, message)
    return (
        <Grid  container width='100%' spacing={2}>
            <Grid item xs={12}>
            <img  src={Contact} alt='Contact' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'430px', marginTop:'200px', opacity: .4}}/>
            <Item>
            <Grid ml='70px' mb='20px' mt='20px'><Botones></Botones></Grid>
            <Typography marginLeft={'175px'} fontSize={'20px'} color={'#ff0080'} variant="h3" gutterBottom>Please fill out the quick form and we will be in touch soon</Typography>       
            {
                showAlertSucces && <Alert severity="success">sent succesfully</Alert>
            }
            {
                showAlertFiels && <Alert severity="error">you must complete all the fiels</Alert>
            }
            <Grid  container spacing={2}>
            <Grid item xs={6}>
            <form onSubmit={handleSubmit}
                style={{backgroundColor:'white', marginLeft:'175px', width:'200px'}}
                noValidate
                autoComplete="off"
                >
                
                <TextField id="name" label="name" onChange={handleName} variant="filled" />
                <TextField id="lastName" label="lastname" onChange={handleLastName} variant="filled" />
                <TextField id="phone" label="phone number" onChange={handlePhone} variant="filled" />
                <TextField id="Email" label="E-mail" onChange={handleEmail} variant="filled" />
                <TextField id="message" label="Message" onChange={handleMessage} 
                multiline
                rows={4}
                defaultValue=""
                variant="filled"
                />
                <Button type='submit' onClick={(e)=>{handleSubmit(e)}} value={'Send'}> Send</Button>
            </form>
            </Grid>
            <Grid item xs={6}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid  marginLeft={'10px'} container spacing={2}>
                    <Grid  item xs={8}> <Item  >Name: Andres Mejia</Item>  </Grid>
                    <Grid item xs={8}>  <Item>Phone: 0451049712</Item>     </Grid>
                    <Grid item xs={8}>  <Item>E-mail: anmepe.sud@gmail.com</Item>  </Grid>
                    <Grid item xs={8}>
                    
                 <Typography>Redes sociales:</Typography>
                    
                 <Link to="https://www.facebook.com/andres.m.perez.581" style={{color:'#0afdd7'}} target={"_blank"}><FacebookIcon /></Link>
                 <Link to="https://www.linkedin.com/in/andres-mejia-374483240/" style={{color:'#0afdd7'}} target={"_blank"}><LinkedInIcon /></Link>
                 <Link to="https://www.instagram.com/" style={{color:'#0afdd7'}} target={"_blank"}><InstagramIcon /></Link>
                 <Link to="https://wa.link/vok4hw" style={{color:'#0afdd7'}} target={"_blank"}rel=' noopener noreferrer'><WhatsAppIcon /></Link>   
                    </Grid>
                </Grid>
            <Item>             
               <Grid ml='20px' mt='10px'><BotonPage></BotonPage></Grid>
             </Item>
                </Box>
                </Grid>
                </Grid>      
            </Item>
            </Grid>
      </Grid>
    )
}

export default Contactanos