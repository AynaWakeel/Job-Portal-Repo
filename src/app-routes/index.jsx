import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AuthRoutes from '../routes/auth-routes'
import ApplicantRoutes from '../routes/applicant-routes'
import RecruiterRoutes from '../routes/recruiter-routes'
import AdminDashboardRoutes from '../routes/admin-dashboard-routes'

const AppRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Navigate to='/auth/register'/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        <Route path='/applicant/*' element={<ApplicantRoutes/>}/>
        <Route path='/recruiter/*' element={<RecruiterRoutes/>}/>
        <Route path='/admin/dashboard*' element={<AdminDashboardRoutes/>}/>
       </Routes>
    </div>
  )
}

export default AppRoutes