import React from 'react'
import AdminLayouts from '../../layouts/admin-layouts'
import { Route, Routes } from 'react-router'
import ApplicantProfile from '../../shared/dashboard/applicant/profile'

const AdminRoutes = () => {
  return (
    <div>
        <AdminLayouts>
            <Routes>
            <Route path='/profile' element={<ApplicantProfile/>}/>

            </Routes>
        </AdminLayouts>
    </div>
  )
}

export default AdminRoutes