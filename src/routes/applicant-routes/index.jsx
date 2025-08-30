import React from 'react'
import { Route, Routes } from 'react-router'
import ApplicantLayouts from '../../layouts/applicant-layouts'
import MainDashboardRoutes from '../main-dashboard-routes'
import JobDetailCards from '../../shared/findjobs/detail-cards'
import FindJob from '../../shared/findjobs/home'
import CompanyJobDetail from '../../shared/findjobs/company-job-detail'
import Support from '../../shared/support/navbar'
import ApplicantProfile from '../../shared/dashboard/applicant/profile'


const ApplicantRoutes = () => {
  return (
    <div>
      <ApplicantLayouts>
      <Routes>
        <Route path='/profile' element={<ApplicantProfile/>}/>
        <Route path='/findjobs' element={<FindJob/>}/>
        <Route path='/findjobs/detail' element={<JobDetailCards/>}/>
        <Route path='/company' element={<CompanyJobDetail/>}/>
        <Route path='/dashboard/*' element={<MainDashboardRoutes/>}/>
        <Route path='/support' element={<Support/>}>
        </Route>
      </Routes>
      </ApplicantLayouts>
    </div>
  )
}

export default ApplicantRoutes