import { Link } from "react-router-dom"
import React from "react"

const BotonContactame = ()=>{
    return(

<Link to="/Contactanos"style={{marginLeft:'40px', fontSize:'20px', 
textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',background:'#0afdd7',color: "black"}}>
Contact me!
</Link>
    )
}

export default BotonContactame