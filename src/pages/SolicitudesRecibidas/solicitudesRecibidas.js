import Typography from "@mui/material/Typography"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import React, { useEffect, useState } from "react";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import axios from "axios";


const SolicitudesRecibidas = () => {
    const [data, setData] = useState([])
    const Url = 'http://localhost:3001/contactanos'
    const getData = async ()=>{
        try {
            const {data:respond} = await axios.get(Url)
            setData(respond)
        }
        catch(error){
            console.log('error')
        }
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)

    return(
    <Grid container>
        <Grid item>
            <Typography>Solicitudes</Typography>
        </Grid>
        <Grid item>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row)=>(
               <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}> 
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.message}</TableCell>
               </TableRow> 
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    </Grid>
    )
}

export default SolicitudesRecibidas