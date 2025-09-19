import React from 'react'
import { Navigate, Outlet } from 'react-router'

const UnProtectedRoutes = ({allowedRole}) => {
    const token = localStorage.getItem("token")

    if(token && allowedRole){
       return <Navigate to="/unauthorized"/>;
    }


  return <Outlet/>
}

export default UnProtectedRoutes