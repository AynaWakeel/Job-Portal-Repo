import React from 'react'
import { Jobdiv } from './style'
import FavJobCards from '../../../../components/fav-jobs'

const ApplicantFavouriteJobs = () => {
  return (
    <div>
      <Jobdiv>
        <div>
          <h1 className='TopHeading'>Favourite Jobs</h1>
        </div>    

        <div>
          <FavJobCards/>
        </div>
      </Jobdiv>
    </div>
  )
}

export default ApplicantFavouriteJobs