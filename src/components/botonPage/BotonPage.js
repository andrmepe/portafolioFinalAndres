import { Link } from "react-router-dom"
import React from "react"

const BotonPage = ()=>{
    return(

<Link to="/PaginaPrincipal"style={{fontSize:'20px', 
textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',background:'black',color: "#0afdd7"}}>
main page
</Link>
    )
}

export default BotonPage