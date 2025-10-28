import React, { useEffect, useRef, useState } from 'react'
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
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'


const RecruiterNavbar = () => {
  const navigate = useNavigate()
  const [notify, setNotify] = useState([])
  const [chatCount, setChatCount] = useState([])

  const profileDropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

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

  const fetchChatUnreadCount = async () => {
    const res = await Chat_Endpoints.get_unread_chats()
    if (res?.data) {
      setChatCount(res.data)
      console.log("noti", res.data);
    }
  }

  useEffect(() => {
    fetch()
    fetchChatUnreadCount()
  }, [])


  const Post = () => {
    navigate('/recruiter/dashboard/postjob')
  }

  const Notification = () => {
    navigate('/recruiter/dashboard/notifications')
    setIsOpen(false)
  }

  const ProfilePage = () => {
    navigate('/recruiter/profile')
    setIsDropdownOpen(false)
    setIsOpen(false)
  }
  const Message = () => {
    navigate('/recruiter/chat')
    setIsOpen(false)
  }

  const [isActive, setIsActive] = useState('Dashboard')

  const FindCandidates = () => {
    navigate('/recruiter/find-candidates')
    setIsActive("Find Candidates")
    setIsOpen(false)
  }
  const Dashboard = () => {
    navigate('/recruiter/dashboard/overview')
    setIsActive("Dashboard")
    setIsOpen(false)
  }

  const Support = () => {
    navigate('/recruiter/support')
    setIsActive("Customer Support")
    setIsOpen(false)
  }

  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
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
            <div className='unreadNotify'>
              <img src={Chat} alt='msg' onClick={Message} />
              <span className='count'>{chatCount.totalUnreadMessages}</span>
            </div>
            <div className='unreadNotify'>
              <img src={NotifyIcon} alt='notify' onClick={Notification} />
              <span className='count'>{notify.unreadCount}</span>
            </div>
            <button type='button' onClick={Post} className='NavBtn'>Post a Job</button>

            <div ref={profileDropdownRef}>

              {analytics.profilepic ?

                <div className='photo'>
                  <img src={analytics.profilepic} alt='profile' onClick={OpenDropdown} />
                </div>
                :
                <div className='photo' onClick={OpenDropdown} ></div>
              }

              {isDropdownOpen &&
                <DropdownMenu>
                  <ul className='Navlinks'>
                    <li><a onClick={ProfilePage}>Profile</a></li>
                    <li><a onClick={onLogout}>Logout</a></li>
                  </ul>
                </DropdownMenu>
              }
            </div>
          </div>

          <div ref={mobileMenuRef}>

            {isOpen ?
              <img src={Close} alt='img' className='Display' onClick={OpenMenu} /> :
              <img src={Menubar} alt='img' className='Display' onClick={OpenMenu} />
            }

            {/* ------------- mobile view ----------------- */}
            {isOpen &&
              <Menu>
                <div>
                  <div className='Navright'>
                    <div className='unreadNotify'>
                      <img src={Chat} alt='msg' onClick={Message} />
                      <span className='count'>{chatCount.totalUnreadMessages}</span>
                    </div>
                    <div className='unreadNotify'>
                      <img src={NotifyIcon} alt='notify' onClick={Notification} />
                      <span className='count'>{notify.unreadCount}</span>
                    </div>
                    {analytics.profilepic ?

                      <div className='photo'>
                        <img src={analytics.profilepic} alt='profile' className='profile' onClick={ProfilePage} />
                      </div>

                      :

                      <div className='photo' onClick={ProfilePage}></div>

                    }

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

          </div>
        </div>

      </Navbar>
    </div>
  )
}

export default RecruiterNavbar