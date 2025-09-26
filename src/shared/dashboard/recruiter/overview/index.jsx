import React, { useEffect, useState } from 'react'
import { Overview, Verification, Jobdiv } from './style'
import Profile from '../../../../assets/images/Employers.png'
import { ReactComponent as Arrow } from '../../../../assets/icons/fi_arrow-right.svg'
import { useNavigate } from 'react-router'
import PostedJobs from '../../../../components/posted-jobs'
import RecruiterAnalytics from '../../../../components/recruiter-analytics'
import { Recruiter_Endpoints } from '../../../../lib/api/recruiter_endpoints'

const RecruiterOverview = () => {
  const navigate = useNavigate()
  const ViewAll = () => {
    navigate('/recruiter/dashboard/myjobs')
  }

  const [analytics, setAnalytics] = useState({})

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await Recruiter_Endpoints.get_recruiter_analytics()
      if(res?.data?.data){
        setAnalytics(res.data.data)
      }
    }
    fetchData()
  },[])

  return (
    <div>
      <Overview>
        <div className='Txtdiv'>
          <h5>Hello, {analytics.recruiterName}</h5>
          <p>Here is your daily activities and job alerts</p>
        </div>

        <RecruiterAnalytics analytics={analytics}/>
        <Verification>
          <div className='Card'>
            <div className='Inner-flex'>
              <div className='profile'>
                <img src={Profile} alt='img' />
              </div>
              <div>
                <h3 className='Heading'>Two-Factor Authentication Incomplete</h3>
                <span className='SubHeading'>For your account’s security, please finish setting up two-factor authentication.</span>
              </div>
            </div>
            <button className='CardBtn'>
              <span>Enable Now</span>
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
              <div><span>Update</span></div>
              <div><span>Status</span></div>
              <div><span>Active</span></div>
            </div>
          </div>

          <div>
            <PostedJobs />

          </div>
        </Jobdiv>
      </Overview>
    </div>
  )
}

export default RecruiterOverview