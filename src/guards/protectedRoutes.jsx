import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = ({allowedRole}) => {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if(!token){
       return  <Navigate to="/auth/login" replace/>
    }

    if(allowedRole && !allowedRole.includes(role)){
        return <Navigate to="/unauthorized" replace/>
    }

    return <Outlet/>
}

export default ProtectedRoutes