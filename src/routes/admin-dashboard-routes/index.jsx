import React from 'react'
import { Route, Routes } from 'react-router'
import ManageUsers from '../../components/container/admin/manager-users/options'
import AdminOverview from '../../components/container/admin/overview'
import ManageJobs from '../../components/container/admin/manage-jobs'
import Managecategory from '../../components/container/admin/manage-category'
import ManageCMS from '../../components/container/admin/manage-cms/cms'
import UserAccounts from '../../components/container/admin/user-accounts'
import AdminDashboardLayouts from '../../layouts/admin-dashboard-layouts'
import AdminProfile from '../../components/container/admin/profile'
import AdminNotification from '../../components/container/admin/notifications'
import ManageJobDetail from '../../components/container/admin/manage-job-detail'
import ScrollToTop from '../../helper/ScrollToTop'
import ShowApplicantToAdmin from '../../components/container/admin/manager-users/view-applicant-profile'
import ShowRecruiterToAdmin from '../../components/container/admin/manager-users/view-recruiter-profile'

const AdminDashboardRoutes = () => {
  return (
    <div>

      <AdminDashboardLayouts>
        <ScrollToTop/>
        <Routes>
          <Route path='/profile' element={<AdminProfile />} />
          <Route path='/notifications' element={<AdminNotification />} />
          <Route path='/overview' element={<AdminOverview />} />
          <Route path='/manage-users' element={<ManageUsers />} />
          <Route path='/manage-jobs' element={<ManageJobs />} />
          <Route path='/manage-category' element={<Managecategory />} />
          <Route path='/manage-cms' element={<ManageCMS />} />
          <Route path='/user-accounts' element={<UserAccounts />} />
          {/* -------------- without sidebar -------------- */}
          <Route path='/applicant-profile' element={<ShowApplicantToAdmin />} />
          <Route path='/recruiter-profile' element={<ShowRecruiterToAdmin />} />
          <Route path='/job-detail' element={<ManageJobDetail />} />
        </Routes>
      </AdminDashboardLayouts>
    </div>
  )
}

export default AdminDashboardRoutes