import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { ROLE } from '../enum/roles'

const UnProtectedRoutes = () => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if(token && role){
      switch(role){
        case ROLE.APPLICANT :
        return <Navigate to="/applicant/dashboard/overview"/>
        case ROLE.RECRUITER :
          return <Navigate to="/recruiter/dashboard/overview"/>
        case ROLE.ADMIN :
          return <Navigate to="/admin/dashboard"/>
        default :
        return <Navigate to="/unauthorized"/>
        
      }
      
    }


  return <Outlet/>
}

export default UnProtectedRoutes