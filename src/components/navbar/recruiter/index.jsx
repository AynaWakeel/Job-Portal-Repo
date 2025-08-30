import React, { useState } from 'react'
import { Menu, Navbar, NavbarNav } from './style'
import { ReactComponent as Myjob } from '../../../assets/icons/MyJobLogo.svg'
import Profile from '../../../assets/images/Employers.png'
import Notify from '../../../assets/icons/BellRinging.svg'
import { useNavigate } from 'react-router'
import FindCandidates from '../../../shared/find-candidates/home'
import Menubar from '../../../assets/icons/fi_menu.svg'
import Close from '../../../assets/icons/fi_x.svg'

const RecruiterNavbar = () => {
  const navigate = useNavigate()

  const Post = () => {
    navigate('/recruiter/dashboard/recruiter-postjob')
  }

  const Notification = () => {
    navigate('/recruiter/dashboard/recruiter-notifications')
  }

  const ProfilePage = () => {
    navigate('/recruiter/profile')
  }

  const [isActive, setIsActive] = useState('Find Candidates')

  const FindCandidates = () => {
    navigate('/recruiter/find-candidates')
    setIsActive("Find Candidates")
  }
  const Dashboard = () => {
    navigate('/recruiter/dashboard/recruiter-overview')
    setIsActive("Dashboard")
  }

  const Support = () => {
    navigate('/recruiter/support')
    setIsActive("Customer Support")
  }

  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar>
        <NavbarNav>
          <div className='Logo'>
            <Myjob className='IconColor' />
            <h4 className='Logoname'>MyJob</h4>
          </div>
          <div>
            <ul className='Navlinks'>
              <li><a className={isActive === "Find Candidates" ? "tab active" : "tab"} onClick={FindCandidates}>Find Candidates</a></li>
              <li><a className={isActive === "Dashboard" ? "tab active" : "tab"} onClick={Dashboard}>Dashboard</a></li>
              <li><a className={isActive === "Customer Support" ? "tab active" : "tab"} onClick={Support}>Customer Support</a></li>
            </ul>
          </div>
        </NavbarNav>
        <div>
          <div className='Navright'>
            <img src={Notify} alt='notify' onClick={Notification} />
            <button type='button' onClick={Post} className='NavBtn'>Post a Job</button>
            <img src={Profile} alt='profile' onClick={ProfilePage} />
          </div>
          {isOpen ?
            <img src={Close} alt='img' className='Display' onClick={OpenMenu} /> :
            <img src={Menubar} alt='img' className='Display' onClick={OpenMenu} />
          }
        </div>

        {/* ------------- mobile view ----------------- */}
        {isOpen &&
          <Menu>
            <div>
              <div className='Navright'>
                <img src={Notify} alt='notify' className='notify' />
                <img src={Profile} alt='profile' className='profile' />
              </div>
              <ul className='Navlinks'>
                <li><a onClick={FindCandidates}>Find Candidates</a></li>
                <li><a onClick={Dashboard}>Dashboard</a></li>
                <li><a onClick={Support}>Customer Support</a></li>
              </ul>
            </div>
          </Menu>
        }
      </Navbar>
    </div>
  )
}

export default RecruiterNavbar