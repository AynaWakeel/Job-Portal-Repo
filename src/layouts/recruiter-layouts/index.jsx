import React from 'react'
import RecruiterNavbar from '../../components/navbar/recruiter'

const RecruiterLayouts = ({children}) => {
  return (
    <div>
        <RecruiterNavbar/>
        <div>{children}</div>
    </div>
  )
}

export default RecruiterLayouts