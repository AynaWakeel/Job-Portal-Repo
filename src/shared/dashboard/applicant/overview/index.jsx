import React from 'react'
import { Overview, Verification, Jobdiv } from './style'
import Analytics from '../../../../components/analytics'
import Profile from '../../../../assets/images/Ellipse 18.png'
import { ReactComponent as Arrow } from '../../../../assets/icons/fi_arrow-right.svg'
import { useNavigate } from 'react-router'
import Jobs from '../../../../components/jobs'

const ApplicantOverview = () => {
  const navigate = useNavigate()
  const ViewAll = () =>{
    navigate('/applicant/dashboard/applied')
  }
  return (
    <div>
      <Overview>
        <div className='Txtdiv'>
          <h5>Hello, Esther Howard</h5>
          <p>Here is your daily activities and job alerts</p>
        </div>
        <Analytics limit={2} />

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

           <Jobs/>
          </div>
        </Jobdiv>
      </Overview>
    </div>
  )
}

export default ApplicantOverview