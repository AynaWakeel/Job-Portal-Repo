import React from 'react'
import { Route, Routes } from 'react-router'
import RecruiterLayouts from '../../layouts/recruiter-layouts'
// import MainDashboardRoutes from '../main-dashboard-routes'
import Support from '../../shared/support/navbar'
import RecruiterProfile from '../../shared/dashboard/recruiter/profile'
import FindCandidates from '../../shared/find-candidates/home'
import ChatSystem from '../../components/chat-system/chat-sidebar'
import RecruiterDashboardRoutes from '../recruiter-dashboard-routes'
import ViewApplicantProfile from '../../shared/find-candidates/view-profile'
import ViewApplicantResume from '../../shared/find-candidates/view-resume'


const RecruiterRoutes = () => {
  return (
    <div>
      <RecruiterLayouts>
        <Routes>
          <Route path='/find-candidates' element={<FindCandidates />} />
          <Route path='/profile' element={<RecruiterProfile />} />
          <Route path='/chat' element={<ChatSystem />} />
          <Route path='/applicant-profile' element={<ViewApplicantProfile />} />
          <Route path='/applicant-resume' element={<ViewApplicantResume />} />
          <Route path='/dashboard/*' element={<RecruiterDashboardRoutes />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </RecruiterLayouts>
    </div>
  )
}

export default RecruiterRoutes