import React from 'react'
import DashboardLayouts from '../../layouts/dashboard-layouts'
import ApplicantOverview from '../../shared/dashboard/applicant/overview'
import ApplicantAppliedJobs from '../../shared/dashboard/applicant/applied-jobs'
import ApplicantFavouriteJobs from '../../shared/dashboard/applicant/fav-jobs'
import Setting from '../../shared/dashboard/applicant/settings/navbar'
import Notifications from '../../shared/dashboard/applicant/notifications'
import { Route, Routes } from 'react-router'

const ApplicantDashboardRoutes = () => {
  return (
    <div>
        <DashboardLayouts>
        <Routes>          
            <Route path='/overview' element={<ApplicantOverview/>}/>
            <Route path='/applied' element={<ApplicantAppliedJobs/>}/>
            <Route path='/favourities' element={<ApplicantFavouriteJobs/>}/>
            <Route path='/personal-profile' element={<Setting/>}/>
            <Route path='/notifications' element={<Notifications/>} />
        </Routes>
        </DashboardLayouts>
    </div>
  )
}

export default ApplicantDashboardRoutes