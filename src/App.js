import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactanos from './pages/Contactanos/contactanos.js';
import InformacionPersonal from "./pages/InformacionPersonal/informacionPersonal.js";
import PaginaPrincipal from "./pages/PaginaPrincipal/paginaPrincipal.js";
import RedesSociales from "./pages/RedesSociales/redesSociales.js";
import ProyectosCreados from "./pages/ProyectosCreados/proyectosCreados.js";
import TecnologiasAprendidas from "./pages/TecnologiasAprendidas/tecnologiasAprendidas.js";
import SolicitudesRecibidas from "./pages/SolicitudesRecibidas/solicitudesRecibidas.js";
import { ProtectedRoute } from './pages/ProtectedRoute/protectedroute.js';
import React, { Component }  from 'react';


const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoute isAllowed={false}/>}>
        <Route path="/solicitudesRecibidas" element = {<SolicitudesRecibidas/>}></Route>
        <Route path="" element = {<PaginaPrincipal/>}></Route>
        
      </Route>

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

