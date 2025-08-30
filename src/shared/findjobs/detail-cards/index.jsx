import React from 'react'
import { MainSec } from './style'
import AllJobDetail from '../../../components/all-job-detail'

const JobDetailCards = () => {
  return (
    <div>
        <MainSec>
        <div className='Flex'>
          <h1 className='TopHeading'>New Jobs</h1>       
        </div>
        <AllJobDetail/>
      </MainSec>
    </div>
  )
}

export default JobDetailCards