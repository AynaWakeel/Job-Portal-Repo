import React from 'react'
import { Route, Routes } from 'react-router'
import RecruiterLayouts from '../../layouts/recruiter-layouts'
import MainDashboardRoutes from '../main-dashboard-routes'
import Support from '../../shared/support/navbar'
import RecruiterProfile from '../../shared/dashboard/recruiter/profile'
import FindCandidates from '../../shared/find-candidates/home'


const RecruiterRoutes = () => {
  return (
    <div>
    <RecruiterLayouts>
      <Routes>
        <Route path='/find-candidates' element={<FindCandidates/>}/>
        <Route path='/profile' element={<RecruiterProfile/>}/>
        <Route path='/dashboard/*' element={<MainDashboardRoutes/>}/>
        <Route path='/support' element={<Support/>}>
        </Route>
      </Routes>
    </RecruiterLayouts>
    </div>
  )
}

export default RecruiterRoutes