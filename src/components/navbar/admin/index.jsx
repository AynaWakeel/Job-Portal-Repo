import React, { useEffect, useRef, useState } from 'react'
import { Menu, MobileSidebar, Navbar, NavbarNav } from './style'
import { ReactComponent as Layers } from '../../../assets/icons/fi_layers.svg'
import { ReactComponent as Gear } from '../../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../../assets/icons/PlusCircle.svg'
import { ReactComponent as Brief } from '../../../assets/icons/Briefcase.svg'
import { ReactComponent as File } from '../../../assets/icons/fi_file-text.svg'
import { ReactComponent as Home } from '../../../assets/icons/fi_home.svg'
import { ReactComponent as Myjob } from '../../../assets/icons/MyJobLogo.svg'
import Menubar from '../../../assets/icons/fi_menu.svg'
import Close from '../../../assets/icons/fi_x.svg'
import Profile from '../../../assets/images/Ellipse 18.png'
import NotifyIcon from '../../../assets/icons/bell-solid-full.svg'
import { useLocation, useNavigate } from 'react-router'
import UseAuth from '../../../auth/useAuth'
import { Admin_Endpoints } from '../../../lib/api/admin_endpoints'

const AdminNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const [isActive, setIsActive] = useState("Overview")
  const [notify, setNotify] = useState([])
  const profileDropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const { logout } = UseAuth()

  const [adminName, setAdminName] = useState(null)

  const fetchData = async () => {
    const res = await Admin_Endpoints.get_profile()
    if (res?.data) {
      setAdminName(res.data)
    }
  }

  useEffect(() => {
    fetchData()
    fetchCount()
  }, [])

  const fetchCount = async () => {
    const res = await Admin_Endpoints.get_unread_notifications()
    if (res?.data) {
      setNotify(res.data)
      console.log("noti", res.data.data);
      console.log("noti", res.data.unreadCount);
    }
  }

  const onLogout = () => {
    logout()
    navigate('/auth/login')
  }

  const AdminProfile = () => {
    navigate('/admin/dashboard/profile')
    setIsDropdownOpen(false)
    setIsOpen(false)
  }

  const AdminNotify = () => {
    navigate('/admin/dashboard/notifications')
    setIsOpen(false)
  }
  const AdminOptions = [
    { label: "View Analytics", icon: <Home />, path: "/admin/dashboard/overview" },
    { label: "Manage Users", icon: <Layers />, path: "/admin/dashboard/manage-users" },
    { label: "Manage Jobs", icon: <Brief  />, path: "/admin/dashboard/manage-jobs" },
    { label: "User Accounts", icon: <Gear />, path: "/admin/dashboard/user-accounts" },
    { label: "Manage Category", icon: <PlusCircle />, path: "/admin/dashboard/manage-category" },
    { label: "Manage CMS", icon: <File />, path: "/admin/dashboard/manage-cms" },

  ]


  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
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

  return (
    <div>

      <Navbar>
        <NavbarNav>
          {/* ------------ mobile sidebar ---------- */}
          <div className='menudiv' ref={mobileMenuRef}>
            {isOpen ?
              <img src={Close} alt='img' className='Display' onClick={OpenMenu} /> :
              <img src={Menubar} alt='img' className='Display' onClick={OpenMenu} />
            }

            {isOpen &&
              <MobileSidebar>
                <div className='Sidebar'>
                  <div className='Navright'>
                    {adminName.profilepic ?
                      <div className='photo'>
                        <img src={adminName.profilepic} alt='profile'  onClick={AdminProfile} />
                      </div>
                      :
                      <div className='photo'  onClick={AdminProfile}></div>
                    }
                    <h4 className='adminname'>{adminName.fullName || "ADMIN"}</h4>
                  </div>


                  <ul className='Navlinks'>

                    {AdminOptions.map((item) => (

                      <li key={item.path} onClick={() =>{ navigate(item.path); setIsOpen(false);}}
                        className={`tab ${location.pathname === item.path ? 'active' : ''}`}>
                        <div className='IconColor' >{item.icon}</div>
                        <a>{item.label}</a>
                      </li>

                    ))}

                   
                  </ul>

                </div>

                <div className='logout'>
                  <div className='unreadNotify'>
                    <img src={NotifyIcon} alt='notify' onClick={AdminNotify} />
                    <span className='count'>{notify.unreadCount}</span>
                  </div>
                  <button type='button' className='NavBtn' onClick={onLogout}>Logout</button>
                </div>
              </MobileSidebar>

            }
          </div>
          <div className='Logo'>
            <Myjob className='IconColor' />
            <h4 className='Logoname'>MyJob</h4>
          </div>
        </NavbarNav>

        <div className='Navright'>
          <div ref={profileDropdownRef} className='ProfileBar'>

            <h4 className='adminname'>{adminName?.fullName || "ADMIN"}</h4>
            {adminName?.profilepic ?

              <>
                <img src={adminName.profilepic} alt='profile' onClick={OpenDropdown} className='photo' />
              </>
              :
              <>
                <div className='photo' onClick={OpenDropdown} ></div>
              </>
            }

            {/* ------------- mobile view ----------------- */}
            {isDropdownOpen &&
              <Menu>
                <ul className='Navlinks'>
                  <li><a onClick={AdminProfile}>Profile</a></li>
                  <li><a onClick={onLogout}>Logout</a></li>
                </ul>
              </Menu>
            }

          </div>
          <div className='unreadNotify'>
            <img src={NotifyIcon} alt='notify' onClick={AdminNotify} />
            <span className='count'>{notify.unreadCount}</span>
          </div>

        </div>


      </Navbar>

    </div>
  )
}

export default AdminNavbar