import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contactanos from './pages/Contactanos/contactanos.js';
import InformacionPersonal from "./pages/InformacionPersonal/informacionPersonal.js";
import PaginaPrincipal from "./pages/PaginaPrincipal/paginaPrincipal.js";
import RedesSociales from "./pages/RedesSociales/redesSociales.js";
import ProyectosCreados from "./pages/ProyectosCreados/proyectosCreados.js";
import TecnologiasAprendidas from "./pages/TecnologiasAprendidas/tecnologiasAprendidas.js";
import SolicitudesRecibidas from "./pages/SolicitudesRecibidas/solicitudesRecibidas.js";
import { ProtectedRoute } from './pages/ProtectedRoute/protectedroute.js';
import React, { useState }  from 'react';
import Login from "./pages/login/Login.js";




const App = () =>{
  const [isAllowed, setIsAllowed] = useState(true)
  /* console.log(isAllowed) */

    return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to={'/PaginaPrincipal'}/>}></Route>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/solicitudesRecibidas" element = {<SolicitudesRecibidas/>}></Route>
                
      </Route>

        <Route path="/login" element = {<Login setIsAllowed={setIsAllowed}/>}></Route>
        <Route path="/contactanos" element = {<Contactanos/>}></Route>
        <Route path="/informacionPersonal" element = {<InformacionPersonal/>}></Route>
        <Route path="/paginaPrincipal" element = {<PaginaPrincipal/>}></Route>
        <Route path="/redesSociales" element = {<RedesSociales/>}></Route>
        <Route path="/proyectosCreados" element = {<ProyectosCreados/>}></Route>
        <Route path="/tecnologiasAprendidas" element = {<TecnologiasAprendidas/>}></Route>
        <Route path="/solicitudesRecibidas" element = {<SolicitudesRecibidas/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

