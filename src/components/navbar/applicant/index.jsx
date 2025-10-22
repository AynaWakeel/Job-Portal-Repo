import React, { useEffect, useState } from 'react'
import { DropdownMenu, Menu, Navbar, NavbarNav } from './style'
import { ReactComponent as Myjob } from '../../../assets/icons/MyJobLogo.svg'
import Menubar from '../../../assets/icons/fi_menu.svg'
import Close from '../../../assets/icons/fi_x.svg'
import Profile from '../../../assets/images/Ellipse 18.png'
import NotifyIcon from '../../../assets/icons/bell-solid-full.svg'
import Chat from '../../../assets/icons/comments-solid-full.svg'
import { useNavigate } from 'react-router'
import UseAuth from '../../../auth/useAuth'
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'

const ApplicantNavbar = () => {
  
  const [notify, setNotify] = useState([])
  const [analyticsData, setAnalyticsData] = useState([])
  const [isActive, setIsActive] = useState('Dashboard')

  const navigate = useNavigate()
  const { logout } = UseAuth()

  const onLogout = () => {
    logout()
    navigate('/auth/login')
  }
  
   const fetchUnreadCount = async () => {
        const res = await Applicant_Endpoints.get_unread_notifications()
        if (res?.data) {
            setNotify(res.data)
            console.log("noti", res.data);
        }
    }


  const fetchData = async () => {
    const res = await Applicant_Endpoints.get_applicant_analytics()
    if (res?.data?.data) {
      setAnalyticsData(res.data.data)
    }

  }

  useEffect(() => {
    fetchData()
    fetchUnreadCount()
  }, [])

  const FindJob = () => {
    navigate('/applicant/findjobs')
    setIsActive("Find Jobs")
     setIsOpen(false)
  }
  const Dashboard = () => {
    navigate('/applicant/dashboard/overview')
    setIsActive("Dashboard")
     setIsOpen(false)
  }

  const Support = () => {
    navigate('/applicant/support')
    setIsActive("Customer Support")
     setIsOpen(false)
  }

  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const Notification = () => {
    navigate('/applicant/dashboard/notifications')
     setIsOpen(false)
  }

  const ApplicanntProfile = () => {
    navigate('/applicant/profile')
    setIsDropdownOpen(false)
     setIsOpen(false)
  }
  const Message = () => {
    navigate('/applicant/chat')
     setIsOpen(false)
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
             <div className='unreadNotify'>
              <img src={NotifyIcon} alt='notify' onClick={Notification} />
              <span className='count'>{notify.unreadCount}</span>
            </div>
            {analyticsData.profilepic ? 
            
            <div className='photo'>
              <img src={analyticsData.profilepic} alt='profile' onClick={OpenDropdown} />
            </div>

            :

            <div className='photo'  onClick={OpenDropdown} ></div>

            }
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
                <img src={Chat} alt='msg' onClick={Message} />
                <div className='unreadNotify'>
                <img src={NotifyIcon} alt='notify' className='notify' onClick={Notification} />
                  <span className='count'>{notify.unreadCount}</span>
                </div>
                {analyticsData.profilepic ? 
                
                <div className='photo'>
                  <img src={analyticsData.profilepic} alt='profile' className='profile' onClick={ApplicanntProfile} />
                </div>

                :

                <div className='photo'  onClick={ApplicanntProfile} ></div>
                }
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