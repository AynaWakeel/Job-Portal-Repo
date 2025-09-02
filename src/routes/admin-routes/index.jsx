import React from 'react'
import AdminLayouts from '../../layouts/admin-layouts'
import { Route, Routes } from 'react-router'
import ApplicantProfile from '../../shared/dashboard/applicant/profile'
import CompanyJobDetail from '../../shared/findjobs/company-job-detail'

const AdminRoutes = () => {
  return (
    <div>
        <AdminLayouts>
            <Routes>
            <Route path='/profile' element={<ApplicantProfile/>}/>
            <Route path='/job-detail' element={<CompanyJobDetail/>}/>
            </Routes>
        </AdminLayouts>
    </div>
  )
}

export default AdminRoutes