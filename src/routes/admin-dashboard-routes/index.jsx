import React from 'react'
import { Route, Routes } from 'react-router'
import ManageUsers from '../../shared/dashboard/admin/manager-users'
import AdminOverview from '../../shared/dashboard/admin/overview'
import ManageJobs from '../../shared/dashboard/admin/manage-jobs'
import Managecategory from '../../shared/dashboard/admin/manage-category'
import ManageCMS from '../../shared/dashboard/admin/manage-cms/cms'
import UserAccounts from '../../shared/dashboard/admin/user-accounts'
import AdminDashboardLayouts from '../../layouts/admin-dashboard-layouts'
import AdminProfile from '../../shared/dashboard/admin/profile'

const AdminDashboardRoutes = () => {
  return (
    <div>
      
      <AdminDashboardLayouts>
      <Routes>
        <Route path='/profile' element={<AdminProfile/>}/>
        <Route path='/overview' element={<AdminOverview/>}/>
        <Route path='/manage-users' element={<ManageUsers/>}/>
        <Route path='/manage-jobs' element={<ManageJobs/>}/>
        <Route path='/manage-category' element={<Managecategory/>}/>
        <Route path='/manage-cms' element={<ManageCMS/>}/>
        <Route path='/user-accounts' element={<UserAccounts/>}/>
      </Routes>
      </AdminDashboardLayouts>
    </div>
  )
}

export default AdminDashboardRoutes