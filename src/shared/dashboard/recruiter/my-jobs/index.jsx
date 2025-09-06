import React from 'react'
import { Jobdiv } from './style'
import PostedJobs from '../../../../components/posted-jobs'

const RecruiterMyJobs = () => {
  return (
    <div>

      <Jobdiv>
        <div>
          <h1 className='TopHeading'>All Posted Jobs</h1>
        </div>

        <div className='Tableheading'>
          <div><span>Job</span></div>
          <div className='TableFlex'>
            <div><span>Update</span></div>
            <div><span>Status</span></div>
            <div><span>Active</span></div>
          </div>
        </div>

        <div>
         <PostedJobs/>
        </div>
      </Jobdiv>

    </div>
  )
}

export default RecruiterMyJobs