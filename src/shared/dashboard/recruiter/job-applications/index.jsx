import React from 'react'
import { Jobdiv } from './style'
import ApplicationCards from '../../../../components/application-cards'
import Resume from '../../../../components/resume'
import Shortlist from '../../../../components/shortlist'
import Selected from '../../../../components/selected'
import { useParams } from 'react-router'

const JobApplications = () => {
  const {jobId} = useParams()
  
  return (
    <div>
      <Jobdiv>
        <div>
          <h1 className='TopHeading'>Job Applications</h1>
        </div>

        <div className='flex'>
          <div className='Box'>
            <h4 className='Title'>All Applications</h4>

            <ApplicationCards jobId={jobId}/>
          </div>
          <div className='Box'>
            <h4 className='Title'>Shortlisted</h4>
            <Shortlist/>
          </div>

          <div className='Box'>
            <h4 className='Title'>Selected</h4>
            <Selected/>
          </div>
        </div>
      </Jobdiv>

    
    </div>
  )
}

export default JobApplications