import React, { useEffect, useRef, useState } from 'react'
import { DropdownMenu, Menu, Navbar, NavbarNav } from './style'
import { ReactComponent as Myjob } from '../../../assets/icons/MyJobLogo.svg'
import Menubar from '../../../assets/icons/fi_menu.svg'
import Close from '../../../assets/icons/fi_x.svg'
import Profile from '../../../assets/images/Ellipse 18.png'
import NotifyIcon from '../../../assets/icons/bell-solid-full.svg'
import Chat from '../../../assets/icons/comments-solid-full.svg'
import { useLocation, useNavigate } from 'react-router'
import UseAuth from '../../../auth/useAuth'
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { socket } from '../../../lib/socket/socket';


const ApplicantNavbar = () => {
  const location = useLocation()
  const [notify, setNotify] = useState([])
  const [chatCount, setChatCount] = useState([])
  const [analyticsData, setAnalyticsData] = useState([])
  const profileDropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

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

  const fetchChatUnreadCount = async () => {
    const res = await Chat_Endpoints.get_unread_chats()
    if (res?.data) {
      setChatCount(res.data)
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
    fetchData();
    fetchUnreadCount();
    fetchChatUnreadCount();

    const interval = setInterval(async () => {
      try {
        console.log(" unread counter");
        await fetchUnreadCount();
        await fetchChatUnreadCount();
      } catch (err) {
        console.error("Error in fetching unread counts", err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
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

  const ApplicantNavbarOptions = [
    { label: "Find Jobs", path: "/applicant/findjobs" },
    { label: "Dashboard", path: "/applicant/dashboard/overview" },
    { label: "Customer Support", path: "/applicant/support" },
  ]


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
              {ApplicantNavbarOptions.map((item) => {

                const isActive =
                  item.path === '/applicant/dashboard/overview'
                    ? location.pathname.startsWith('/applicant/dashboard')
                    : location.pathname === item.path;

                return (

                  <li key={item.path} onClick={() => { navigate(item.path); setIsOpen(false); }}>
                    <a className={`tab ${isActive ? 'active' : ''}`}>
                      {item.label}
                    </a>
                  </li>

                )
              })}

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

            <div ref={profileDropdownRef}>

              {analyticsData.profilepic ?

                <div className='photo'>
                  <img src={analyticsData.profilepic} alt='profile' onClick={OpenDropdown} />
                </div>
                :
                <div className='photo' onClick={OpenDropdown} ></div>
              }

              {isDropdownOpen &&
                <DropdownMenu>
                  <ul className='Navlinks'>
                    <li><a onClick={ApplicanntProfile}>Profile</a></li>
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
                      <img src={NotifyIcon} alt='notify' className='notify' onClick={Notification} />
                      <span className='count'>{notify.unreadCount}</span>
                    </div>

                    {analyticsData.profilepic ?

                      <div className='photo'>
                        <img src={analyticsData.profilepic} alt='profile' className='profile' onClick={ApplicanntProfile} />
                      </div>
                      :
                      <div className='photo' onClick={ApplicanntProfile} ></div>
                    }
                  </div>
                  <ul className='Navlinks'>

                    {ApplicantNavbarOptions.map((item) => {

                      const isActive =
                        item.path === '/applicant/dashboard/overview'
                          ? location.pathname.startsWith('/applicant/dashboard')
                          : location.pathname === item.path;

                      return (

                        <li key={item.path} onClick={() => { navigate(item.path); setIsOpen(false); }}>
                          <a className={`tab ${isActive ? 'active' : ''}`}>
                            {item.label}
                          </a>
                        </li>

                      )
                    })}
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

export default ApplicantNavbar