import React from 'react'
import ApplicantNavbar from '../../components/navbar/applicant'

const ApplicantLayouts = ({children}) => {
  return (
    <div>
        <ApplicantNavbar/>
        <div>{children}</div>
    </div>
  )
}

export default ApplicantLayouts