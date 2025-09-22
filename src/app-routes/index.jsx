import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AuthRoutes from '../routes/auth-routes'
import ApplicantRoutes from '../routes/applicant-routes'
import RecruiterRoutes from '../routes/recruiter-routes'
import AdminDashboardRoutes from '../routes/admin-dashboard-routes'
import ProtectedRoutes from '../guards/protectedRoutes'
import { ROLE } from '../enum/roles'
import UnAuthorized from '../components/unauthorized'
import UnProtectedRoutes from '../guards/unProtectedRoutes'

const AppRoutes = () => {
  return (
    <div>
      <Routes>

        <Route element={<UnProtectedRoutes />}>
          <Route path='/' element={<Navigate to='/auth/register' />} />
          <Route path='/auth/*' element={<AuthRoutes />} />
        </Route>

        <Route path='/unauthorized' element={<UnAuthorized />} />

        <Route element={<ProtectedRoutes allowedRole={[ROLE.APPLICANT]} />}>
          <Route path='/applicant/*' element={<ApplicantRoutes />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRole={[ROLE.RECRUITER]} />}>
          <Route path='/recruiter/*' element={<RecruiterRoutes />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRole={[ROLE.ADMIN]} />}>
          <Route path='/admin/dashboard*' element={<AdminDashboardRoutes />} />
        </Route>

      </Routes>
    </div>
  )
}

export default AppRoutes