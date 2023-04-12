import { Navigate, Outlet } from "react-router-dom"
import React from 'react';


export const ProtectedRoute = ({
    isAllowed,
    redirectTo = '/Login',
    children
}) => {
    if (!isAllowed){
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet/>
}