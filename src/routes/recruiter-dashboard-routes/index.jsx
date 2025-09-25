import React from 'react'
import DashboardLayouts from '../../layouts/dashboard-layouts'
import { Route, Routes } from 'react-router'
import RecruiterOverview from '../../shared/dashboard/recruiter/overview'
import JobApplications from '../../shared/dashboard/recruiter/job-applications'
import RecruiterMyJobs from '../../shared/dashboard/recruiter/my-jobs'
import RecruiterPostaJob from '../../shared/dashboard/recruiter/post-jobs'
import RecruiterSettings from '../../shared/dashboard/recruiter/settings/navbar'
import RecruiterNotifications from '../../shared/dashboard/recruiter/notifications'
import ViewProfileApplications from '../../shared/dashboard/recruiter/application-applicant-profile'

const RecruiterDashboardRoutes = () => {
    return (
        <div>
            <DashboardLayouts>
                <Routes>
                    <Route path='/overview' element={<RecruiterOverview />} />
                    <Route path='/applications' element={<JobApplications />} />
                    <Route path='/applicate-profile' element={<ViewProfileApplications />} />
                    <Route path='/myjobs' element={<RecruiterMyJobs />} />
                    <Route path='/postjob' element={<RecruiterPostaJob />} />
                    <Route path='/settings' element={<RecruiterSettings />} />
                    <Route path='/notifications' element={<RecruiterNotifications />} />
                </Routes>
            </DashboardLayouts>
        </div>
    )
}

export default RecruiterDashboardRoutes