import React, { useState } from 'react'
import { DropdownMenu, Menu, Navbar, NavbarNav } from './style'
import { ReactComponent as Myjob } from '../../../assets/icons/MyJobLogo.svg'
import Menubar from '../../../assets/icons/fi_menu.svg'
import Close from '../../../assets/icons/fi_x.svg'
import Profile from '../../../assets/images/Ellipse 18.png'
import Notify from '../../../assets/icons/BellRinging.svg'
import Chat from '../../../assets/icons/fi_message-circle.svg'
import { useNavigate } from 'react-router'
import UseAuth from '../../../auth/useAuth'

const ApplicantNavbar = () => {
  const [isActive, setIsActive] = useState('Dashboard')

  const navigate = useNavigate()
  const { logout } = UseAuth()

   const onLogout =()=>{
    logout()
    navigate('/auth/login')
  }

  const FindJob = () => {
    navigate('/applicant/findjobs')
    setIsActive("Find Jobs")
  }
  const Dashboard = () => {
    navigate('/applicant/dashboard/overview')
    setIsActive("Dashboard")
  }

  const Support = () => {
    navigate('/applicant/support')
    setIsActive("Customer Support")
  }

  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen(true)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen(true)
  }

  const Notification = () => {
    navigate('/applicant/dashboard/notifications')
  }

  const ApplicanntProfile = () => {
    navigate('/applicant/profile')
    setIsDropdownOpen(false)
  }
  const Message = () => {
    navigate('/applicant/chat')
  }
  return (
    <div>
      <Navbar>
        <NavbarNav>
          <div className='Logo'>
            <Myjob className='IconColor' />
            <h4 className='Logoname' onClick={logout}>MyJob</h4>
          </div>
          <div>
            <ul className='Navlinks'>
              <li><a className={isActive === "Find Jobs" ? "tab active" : "tab"} onClick={FindJob}>Find Jobs</a></li>
              <li><a className={isActive === "Dashboard" ? "tab active" : "tab"} onClick={Dashboard}>Dashboard</a></li>
              <li><a className={isActive === "Customer Support" ? "tab active" : "tab"} onClick={Support}>Customer Support</a></li>
            </ul>
          </div>
        </NavbarNav>
        <div>
          <div className='Navright'>
            <img src={Chat} alt='msg' onClick={Message} />
            <img src={Notify} alt='notify' onClick={Notification} />
            <img src={Profile} alt='profile' onClick={OpenDropdown} />
          </div>
          {isDropdownOpen &&
            <DropdownMenu>
              <ul className='Navlinks'>
                <li><a onClick={ApplicanntProfile}>Profile</a></li>
                <li><a onClick={onLogout}>Logout</a></li>
              </ul>
            </DropdownMenu>
          }
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
                <img src={Notify} alt='notify' className='notify' onClick={Notification} />
                <img src={Profile} alt='profile' className='profile' onClick={ApplicanntProfile} />
              </div>
              <ul className='Navlinks'>
                <li><a onClick={FindJob}>Find Jobs</a></li>
                <li><a onClick={Dashboard}>Dashboard</a></li>
                <li><a onClick={Support}>Customer Support</a></li>
                 <li><a onClick={onLogout}>Logout</a></li>
              </ul>
            </div>
          </Menu>
        }
      </Navbar>
    </div>
  )
}

export default ApplicantNavbar