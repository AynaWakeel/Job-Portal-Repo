import React from 'react'
import { Jobdiv } from './style'
import Jobs from '../../../../components/jobs'

const ApplicantFavouriteJobs = () => {
  return (
    <div>
      <Jobdiv>
        <div>
          <h1 className='TopHeading'>Favourite Jobs</h1>
        </div>    

        <div>
          <Jobs/>
        </div>
      </Jobdiv>
    </div>
  )
}

export default ApplicantFavouriteJobs