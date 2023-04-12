import { Alert, Button, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import axios from "axios";
import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({setIsAllowed})=>{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')

    const handleuser = (e)=>{
        setUser(e.target.value)
    }
    
    const handlepassword = (e)=>{
        setPassword(e.target.value)
    }

    /* console.log(user, password) */

    const enter = ()=>{
       if(user === '' || password === ''){
        Alert('yes')
    
       } else {
        axios.post('http://localhost:3001/login',{
            user: user,
            password: password
        }).then((resp)=>{
            setIsAllowed(true)
            navigate("/SolicitudesRecibidas")
        })
       } 
    }
    const navigate = useNavigate()

    return(
        <Grid  container>
            <Grid item> 
                <Typography variante='h4'>Login</Typography>
            </Grid>
            <Grid item>
               <TextField
               onChange={handleuser}
               id="user"
               label="user"
               variant="outlined"/>
               <TextField
               onChange={handlepassword}
               id="password"
               label="password"
               type="password"
               variant="outlined"/>
               <Button variant="outlined" onClick={()=>{enter()}}>Login</Button>
               
            </Grid>

        </Grid>
    )
}

export default Login;