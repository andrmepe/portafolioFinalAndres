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
    <Grid container justifyContent='center' width='100%' style={{ background: 'white'}}>
        <Grid item ml='20px'>
            <Typography><b>Solicitudes</b></Typography>
        </Grid>
        <Grid item>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#0afdd7'}} align="left"><b>Name</b></TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left"><b>Last name</b></TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left"><b>Phone</b></TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left"><b>E-mail</b></TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left"><b>Message</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row)=>(
               <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}> 
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.lastname}</TableCell>
                <TableCell >{row.phone}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.message}</TableCell>
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