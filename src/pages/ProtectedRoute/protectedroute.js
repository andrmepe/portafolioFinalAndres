import { Navigate, Outlet } from "react-router-dom"
import React, { Component }  from 'react';


export const ProtectedRoute = ({
    isAllowed,
    redirectTo = '/PaginaPrincipal',
    children
}) => {
    if (!isAllowed){
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet/>
}