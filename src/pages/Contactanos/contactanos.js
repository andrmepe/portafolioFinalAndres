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
import TextField from '@mui/material/TextField';
import Contact from '../assets/Contact.png'
import axios from 'axios';
import { Alert } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
  color: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontSize:'16px',
  
}));

const Contactanos = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showAlertSucces, setShowAlertSucces] = useState(false)
    const [showAlertFiels, setShowAlertFiels] = useState(false) 

    const clearFiels =()=>{
        setName('')
        setLastName('')
        setPhone('')
        setEmail('')
        setMessage('')
    }

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
        } else {
            axios.post('http://localhost:3001/contactanos/createRequest', {
                name: name,
                lastname: lastName,
                phone: phone,
                email: email,
                message: message
            }).then ((res)=>{
               /*  setName('')
                setLastName('')
                setPhone('')
                setEmail('')
                setMessage('') */
                setShowAlertSucces(true)
                timeShowAlertSucces()
                clearFiels()
            })
        }
    }

    return (
        <Grid  container spacing={2}>
            <Grid item xs={12}>
            <img  src={Contact} alt='Contact' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'fixed', marginLeft:'430px', marginTop:'200px', opacity: .4}}/>
            <Item>
            <Link to="/InformacionPersonal">
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Personal information
                </Button>
            </Link>
            <Link to="/ProyectosCreados" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Projects created
                </Button>
            </Link>
            <Link to="/RedesSociales" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Social networks
                </Button>
            </Link>
            <Link to="/TecnologiasAprendidas" marginLeft={4}>
                <Button variant="outlined" style={{border: '1px solid #0afdd7',color: "white"}}>
                Technologies learned
                </Button>
            </Link>   
            <Link to="SolicitudesRecibidas" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "white"}}>
                Applications received
                </Button>
            </Link>
            <Typography marginLeft={'175px'} fontSize={'20px'} color={'#ff0080'} variant="h3" gutterBottom><p>Please fill out the quick form and we will be in touch soon</p></Typography>       
            {
                showAlertSucces && <Alert severity="success">sent succesfully</Alert>
            }
            {
                showAlertFiels && <Alert severity="error">you must complete all the fiels</Alert>
            }
            <Grid  container spacing={2}>
            <Grid item xs={6}>
            <form onSubmit={handleSubmit}
                style={{backgroundColor:'white', height:'300px'}}
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
                    <Typography><Item> Redes sociales:<Link to="https://www.facebook.com/andres.m.perez.581" target={"_blank"}/><FacebookIcon  fontSize='30px' />
                 <Link to="https://www.linkedin.com/in/andres-mejia-374483240/" target={"_blank"}/><LinkedInIcon fontSize='30px' />
                 <Link to="https://www.instagram.com/" target={"_blank"}/><InstagramIcon fontSize='30px'   /></Item></Typography>
                    </Grid>
                </Grid>
            <Item>             
                <Link to="/PaginaPrincipal" marginLeft={3}>
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