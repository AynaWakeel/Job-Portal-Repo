import React from 'react'
import { MainSec } from './style'
import Jobs from '../../../components/jobs'

const JobDetailCards = () => {
  return (
    <div>
        <MainSec>
        <div className='Flex'>
          <h1 className='TopHeading'>New Jobs</h1>       
        </div>

        <Jobs/>
      </MainSec>
    </div>
  )
}

export default JobDetailCards