import React from 'react'
import { Overview, Verification, Jobdiv } from './style'
import Profile from '../../../../assets/images/Employers.png'
import { ReactComponent as Arrow } from '../../../../assets/icons/fi_arrow-right.svg'
import { useNavigate } from 'react-router'
import PostedJobs from '../../../../components/posted-jobs'
import RecruiterAnalytics from '../../../../components/recruiter-analytics'

const RecruiterOverview = () => {
  const navigate = useNavigate()
  const ViewAll = () => {
    navigate('/recruiter/dashboard/recruiter-myjobs')
  }
  return (
    <div>
      <Overview>
        <div className='Txtdiv'>
          <h5>Hello, Instagram</h5>
          <p>Here is your daily activities and job alerts</p>
        </div>
        
        <RecruiterAnalytics limit={1}/>
        <Verification>
          <div className='Card'>
            <div className='Inner-flex'>
              <div className='profile'>
                <img src={Profile} alt='img' />
              </div>
              <div>
                <h3 className='Heading'>Your profile editing is not completed.</h3>
                <span className='SubHeading'>Complete your profile editing & build your custom Resume</span>
              </div>
            </div>
            <button className='CardBtn'>
              <span>Edit Profile</span>
              <Arrow className='IconColor' />
            </button>
          </div>
        </Verification>

        <Jobdiv>
          <div className='Flex'>
            <h1 className='TopHeading'>Recently Posted Jobs</h1>
            <button className='TopBtn' onClick={ViewAll}>
              <span>View All</span>
              <Arrow className='IconColor' />
            </button>
          </div>

          <div className='Tableheading'>
            <div><span>Job</span></div>
            <div className='TableFlex'>
              <div><span>Applications</span></div>
              <div><span>Status</span></div>
              <div><span>Active</span></div>
            </div>
          </div>

          <div>
           <PostedJobs/>

          </div>
        </Jobdiv>
      </Overview>
    </div>
  )
}

export default RecruiterOverview