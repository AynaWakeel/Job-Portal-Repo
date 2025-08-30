import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Register from '../../auth/register'
import Login from '../../auth/login'
import Otp from '../../auth/otp'
import ForgetPassword from '../../auth/forget-password'
import ResetPassword from '../../auth/reset-password'
import AuthLayouts from '../../layouts/auth-layouts'

const AuthRoutes = () => {
  return (
    <div>
       <AuthLayouts>
       <Routes>
        <Route path='/' element={<Navigate to='/register'/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
       </Routes>
      </AuthLayouts>
    </div>
  )
}

export default AuthRoutes