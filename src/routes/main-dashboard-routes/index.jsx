import React from 'react'
import { Route, Routes } from 'react-router'
import RecruiterOverview from '../../shared/dashboard/recruiter/overview'
import DashboardLayouts from '../../layouts/dashboard-layouts'
import ApplicantOverview from '../../shared/dashboard/applicant/overview'
import ApplicantAppliedJobs from '../../shared/dashboard/applicant/applied-jobs'
import ApplicantFavouriteJobs from '../../shared/dashboard/applicant/fav-jobs'
import RecruiterPostaJob from '../../shared/dashboard/recruiter/post-jobs'
import RecruiterMyJobs from '../../shared/dashboard/recruiter/my-jobs'
import Setting from '../../shared/dashboard/applicant/settings/navbar'
import RecruiterSettings from '../../shared/dashboard/recruiter/settings/navbar'
import JobApplications from '../../shared/dashboard/recruiter/job-applications'
import Notifications from '../../shared/dashboard/applicant/notifications'
import RecruiterNotifications from '../../shared/dashboard/recruiter/notifications'

const MainDashboardRoutes = () => {
  return (
    <div>
        <DashboardLayouts>
        <Routes>
            <Route path='/recruiter-overview' element={<RecruiterOverview/>}/>
             <Route path='/recruiter-applications' element={<JobApplications/>}/>
            <Route path='/recruiter-myjobs' element={<RecruiterMyJobs/>}/>
            <Route path='/recruiter-postjob' element={<RecruiterPostaJob/>}/>
            <Route path='/recruiter-settings' element={<RecruiterSettings/>}/>
            <Route path='/recruiter-notifications' element={<RecruiterNotifications/>}/>
            <Route path='/applicant-overview' element={<ApplicantOverview/>}/>
            <Route path='/applicant-applied' element={<ApplicantAppliedJobs/>}/>
            <Route path='/applicant-favourities' element={<ApplicantFavouriteJobs/>}/>
            <Route path='/applicant-personal-profile' element={<Setting/>}/>
            <Route path='/applicant-notifications' element={<Notifications/>} />
        </Routes>
        </DashboardLayouts>
    </div>
  )
}

export default MainDashboardRoutes