import React from 'react'
import { Route, Routes } from 'react-router'
import ManageUsers from '../../shared/dashboard/admin/manager-users'
import AdminLayouts from '../../layouts/admin-layouts'
import AdminOverview from '../../shared/dashboard/admin/overview'
import ManageJobs from '../../shared/dashboard/admin/manage-jobs'
import Managecategory from '../../shared/dashboard/admin/manage-category'
import ManageCMS from '../../shared/dashboard/admin/manage-cms'
import UserAccounts from '../../shared/dashboard/admin/user-accounts'

const AdminRoutes = () => {
  return (
    <div>
      
      <AdminLayouts>
      <Routes>
        <Route path='/overview' element={<AdminOverview/>}/>
        <Route path='/manage-users' element={<ManageUsers/>}/>
        <Route path='/manage-jobs' element={<ManageJobs/>}/>
        <Route path='/manage-category' element={<Managecategory/>}/>
        <Route path='/manage-cms' element={<ManageCMS/>}/>
        <Route path='/user-accounts' element={<UserAccounts/>}/>
      </Routes>
      </AdminLayouts>
    </div>
  )
}

export default AdminRoutes