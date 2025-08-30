import React from 'react'
import { Jobdiv } from './style'
import AppliedJobs from '../../../../components/applied-jobs'

const ApplicantAppliedJobs = () => {
  return (
    <div>
        <Jobdiv>
          <div>
            <h1 className='TopHeading'>Applied Jobs</h1>           
          </div>

          <div className='Tableheading'>
            <div><span>Job</span></div>
            <div className='TableFlex'>
              <div><span>Date Applied</span></div>
              <div><span>Status</span></div>
              <div><span>Active</span></div>
            </div>
          </div>

          <div>
           <AppliedJobs/>
          </div>
        </Jobdiv>
    </div>
  )
}

export default ApplicantAppliedJobs