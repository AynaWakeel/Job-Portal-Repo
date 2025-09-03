import React, { useState } from 'react'
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
import Notify from '../../../assets/icons/BellRinging.svg'
import { useNavigate } from 'react-router'

const AdminNavbar = () => {
  const [isActive, setIsActive] = useState("Overview")
  const navigate = useNavigate()

  const ManageUser = () => {
    navigate('/admin/dashboard/manage-users')
    setIsActive("Manage Users")
  }

  const ManageJobs = () => {
    navigate('/admin/dashboard/manage-jobs')
    setIsActive("Manage Jobs")
  }

  const userAccounts = () => {
    navigate('/admin/dashboard/user-accounts')
    setIsActive("User Accounts")
  }

  const ManageCategory = () => {
    navigate('/admin/dashboard/manage-category')
    setIsActive("Manage Category")
  }

  const ManageCMS = () => {
    navigate('/admin/dashboard/manage-cms')
    setIsActive("Manage CMS")
  }

  const ViewAnalytics = () => {
    navigate('/admin/overview')
    setIsActive("View Analytics")
  }

  const AdminProfile = ()=>{
    navigate('/admin/dashboard/profile')
  }

  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen(!isOpen)
  }

   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const OpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>

      <Navbar>
        <NavbarNav>
          {/* ------------ mobile sidebar ---------- */}
          <div className='menudiv'>
            {isOpen ?
              <img src={Close} alt='img' className='Display' onClick={OpenMenu} /> :
              <img src={Menubar} alt='img' className='Display' onClick={OpenMenu} />
            }

          </div>
          {isOpen &&
            <MobileSidebar>
              <div className='Sidebar'>

                <div className='Navright'>
                  <img src={Profile} alt='profile' />
                  <h4 className='adminname'>Admin Name</h4>
                </div>
                <ul className='Navlinks'>

                  <li className={isActive === "View Analytics" ? "tab active" : "tab"} onClick={ViewAnalytics}>
                    <Home className='IconColor' />
                    <a>View Analytics</a>
                  </li>
                  <li className={isActive === "Manage Users" ? "tab active" : "tab"} onClick={ManageUser}>
                    <Layers className='IconColor' />
                    <a>Manage Users</a>
                  </li>
                  <li className={isActive === "Manage Jobs" ? "tab active" : "tab"} onClick={ManageJobs}>
                    <Brief className='IconColor' />
                    <a>Manage Jobs</a>
                  </li>
                  <li className={isActive === "User Accounts" ? "tab active" : "tab"} onClick={userAccounts}>
                    <Gear className='IconColor' />
                    <a>User Accounts</a>
                  </li>
                  <li className={isActive === "Manage category" ? "tab active" : "tab"} onClick={ManageCategory}>
                    <PlusCircle className='IconColor' />
                    <a>Manage Category</a>
                  </li>
                  <li className={isActive === "Manage CMS" ? "tab active" : "tab"} onClick={ManageCMS}>
                    <File className='IconColor' />
                    <a>Manage CMS</a>
                  </li>
                </ul>

              </div>

              <div className='logout'>
                <img src={Notify} alt='profile' />
                <button type='button' className='NavBtn'>Logout</button>
              </div>
            </MobileSidebar>

          }
          <div className='Logo'>
            <Myjob className='IconColor' />
            <h4 className='Logoname'>MyJob</h4>
          </div>
        </NavbarNav>

        <div className='Navright'>
          <img src={Notify} alt='notify' />
          <img src={Profile} alt='profile' onClick={OpenDropdown}/>
          <h4 className='adminname'>Admin</h4>
        </div>

        {/* ------------- mobile view ----------------- */}
        {isDropdownOpen &&
          <Menu>
              <ul className='Navlinks'>
                <li><a onClick={AdminProfile}>Profile</a></li>
                <li><a >Logout</a></li>
              </ul>
          </Menu>
        }

      </Navbar>

    </div>
  )
}

export default AdminNavbar