import React, { useEffect, useState } from 'react'
import { Overview, Verification, Jobdiv } from './style'
import Analytics from '../../../../components/analytics'
import Profile from '../../../../assets/images/Ellipse 18.png'
import { ReactComponent as Arrow } from '../../../../assets/icons/fi_arrow-right.svg'
import { useNavigate } from 'react-router'
import Jobs from '../../../../components/jobs'
import { Applicant_Endpoints } from '../../../../lib/api/applicant_endpoints'
import { TwoFactor_Endpoints } from '../../../../lib/api/twoFactor_endpoints'

const ApplicantOverview = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const navigate = useNavigate()
  const ViewAll = () => {
    navigate('/applicant/dashboard/applied')
  }

  const Auth = () =>{
    navigate('/applicant/dashboard/personal-profile')
  }

  const [analyticsData, setAnalyticsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await Applicant_Endpoints.get_applicant_analytics()
      if (res?.data?.data) {
        setAnalyticsData(res.data.data)
      }

      const auth = await TwoFactor_Endpoints.get_authentication_status()
      if (auth?.data?.is2FAEnabled) {
        setIsEnabled(true)
        console.log(auth.data.is2FAEnabled, "2FA");

      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <Overview>
        <div className='Txtdiv'>
          <h5>Hello, {analyticsData.applicantName}</h5>
          <p>Here is your daily activities and job alerts</p>
        </div>
        <Analytics />

        {!isEnabled &&
        
        <Verification>
          <div className='Card'>
            <div className='Inner-flex'>
              <div className='profile'>
                {analyticsData.profilepic ? 
                
                <div className='photo'>
                <img src={analyticsData.profilepic} alt='img' />
                </div>
                :
                 <div className='photo'></div>
                }
              </div>
              <div>
                <h3 className='Heading'>Two-Factor Authentication Incomplete</h3>
                <span className='SubHeading'>For your account’s security, please finish setting up two-factor authentication.</span>
              </div>
            </div>
            <button className='CardBtn'  onClick={Auth}>
              <span>Enable Now</span>
              <Arrow className='IconColor' />
            </button>
          </div>
        </Verification>
        }


        <Jobdiv>
          <div className='Flex'>
            <h1 className='TopHeading'>New Jobs</h1>
            <button className='TopBtn' onClick={ViewAll}>
              <span>View All</span>
              <Arrow className='IconColor' />
            </button>
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

            <Jobs />
          </div>
        </Jobdiv>
      </Overview>
    </div>
  )
}

export default ApplicantOverview