import { Button, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import React from "react"
import axios from "axios"

const Registarse = ({setShowLogin, setShowRegistrarse, user, password, handleuser, handlepassword}) => {
    const goBack = ()=>{
        setShowLogin(true)
        setShowRegistrarse(false)
    }
    /* console.log(user, password) */
    const sendRegistro = ()=>{
        if(user === "" || password ===''){
            alert('must complete all the fiels')
        } else {
            axios.post('http://localhost:3001/login/newUser',{
                user: user,
                password: password
            }).then((resp)=>{
                alert('user is registered')
            }).catch((error)=>{
                console.log('error')
            })
        }
    }

    return(
        <Grid container justifyContent='center' style={{background:'black'}}>
            <Grid mt='20px' mb='20px' border={'1px solid black'} borderRadius={'10px'} style={{background:'white'}} >
            <Grid item mt='10px' ml={2}>
            <Typography color={'black'} ml='60px' variant="h4">Register</Typography>
            </Grid>
            <Grid item mt='30px' ml='75px' mr='70px'>
                <TextField
                onChange={handleuser}
                id='user'
                label='user'
                variant="outlined" />
                <TextField style={{marginLeft:'20px'}}
                onChange={handlepassword}
                id='password'
                label='password'
                variant="outlined" />
            </Grid>
            <Grid mt='30px' ml="135px">
            <Button variant="outlined" onClick={()=>{sendRegistro()}}
            style={{ border: '1px solid #1aa3ff', marginLeft:'55px',marginBottom:'30px', background:'#1aa3ff', color: "white"}}>Register</Button>
            <Button variant="outlined" onClick={()=>{goBack()}} 
            style={{marginLeft:'20px', marginBottom:'30px',border: '1px solid red', background:'red',color: "white"}}>go back</Button> 
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Registarse