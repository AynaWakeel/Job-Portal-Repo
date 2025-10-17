import React from 'react'
import { Jobdiv } from './style'
import JobPostedNotify from '../../../../components/job-posted-notify'
import ApplicationsNotify from '../../../../components/applications-notify'

const RecruiterNotifications = () => {
  return (
    <div>

      <Jobdiv>
        <div>
          <h1 className='TopHeading'>Notifications</h1>
        </div>

        <div>
          <JobPostedNotify/>
          {/* <ApplicationsNotify/> */}
        </div>
      </Jobdiv>

    </div>
  )
}

export default RecruiterNotifications