import React, { useEffect, useState } from 'react'
import { DropdownMenu, Menu, Navbar, NavbarNav } from './style'
import { ReactComponent as Myjob } from '../../../assets/icons/MyJobLogo.svg'
import Profile from '../../../assets/images/Employers.png'
import NotifyIcon from '../../../assets/icons/bell-solid-full.svg'
import { useNavigate } from 'react-router'
import FindCandidates from '../../../shared/find-candidates/home'
import Menubar from '../../../assets/icons/fi_menu.svg'
import Close from '../../../assets/icons/fi_x.svg'
import Chat from '../../../assets/icons/comments-solid-full.svg'
import UseAuth from '../../../auth/useAuth'
import { Recruiter_Endpoints } from '../../../lib/api/recruiter_endpoints'


const RecruiterNavbar = () => {
  const navigate = useNavigate()
  const [notify, setNotify] = useState([])
  const { logout } = UseAuth()

  const onLogout = () => {
    logout()
    navigate('/auth/login')
  }

  const fetch = async () => {
    const res = await Recruiter_Endpoints.get_unread_notifications()
    if (res?.data) {
      setNotify(res.data)
      console.log("noti", res.data.unreadCount);
    }
  }

  useEffect(() => {
    fetch()
  }, [])


  const Post = () => {
    navigate('/recruiter/dashboard/postjob')
  }

  const Notification = () => {
    navigate('/recruiter/dashboard/notifications')
  }

  const ProfilePage = () => {
    navigate('/recruiter/profile')
    setIsDropdownOpen(false)
  }
  const Message = () => {
    navigate('/recruiter/chat')
  }

  const [isActive, setIsActive] = useState('Dashboard')

  const FindCandidates = () => {
    navigate('/recruiter/find-candidates')
    setIsActive("Find Candidates")
  }
  const Dashboard = () => {
    navigate('/recruiter/dashboard/overview')
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const [analytics, setAnalytics] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await Recruiter_Endpoints.get_recruiter_analytics()
      if (res?.data?.data) {
        setAnalytics(res.data.data)
      }

    }
    fetchData()
  }, [])


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
            <img src={Chat} alt='msg' onClick={Message} />
            <div className='unreadNotify'>
              <img src={NotifyIcon} alt='notify' onClick={Notification} />
              <span className='count'>{notify.unreadCount}</span>
            </div>
            <button type='button' onClick={Post} className='NavBtn'>Post a Job</button>
            <div className='photo'>
              <img src={analytics.profilepic} alt='profile' onClick={OpenDropdown} />
            </div>
          </div>
          {isDropdownOpen &&
            <DropdownMenu>
              <ul className='Navlinks'>
                <li><a onClick={ProfilePage}>Profile</a></li>
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
                  <img src={NotifyIcon} alt='notify' onClick={Notification} />
                  <span className='count'>{notify.unreadCount}</span>
                </div>
                <div className='photo'>
                  <img src={analytics.profilepic} alt='profile' className='profile' onClick={ProfilePage} />
                </div>
              </div>
              <ul className='Navlinks'>
                <li><a onClick={FindCandidates}>Find Candidates</a></li>
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

export default RecruiterNavbar