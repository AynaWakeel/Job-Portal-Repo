import React, { useState } from 'react'
import { Dashboard, MobileSidebar, SidebarMenu } from './style'
import { ReactComponent as Layers } from '../../assets/icons/fi_layers.svg'
import { ReactComponent as Bookmark } from '../../assets/icons/BookmarkSimple.svg'
import { ReactComponent as Gear } from '../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../assets/icons/PlusCircle.svg'
import { ReactComponent as Brief } from '../../assets/icons/Briefcase.svg'
import { ReactComponent as Logo } from '../../assets/icons/briefcase2.svg'
import Menubar from '../../assets/icons/fi_menu.svg'
import Close from '../../assets/icons/fi_x.svg'
import { useNavigate } from 'react-router'

const DashboardLayouts = ({ children }) => {
  const [isActive, setIsActive] = useState("Overview")
  const navigate = useNavigate()

  const ApplicantOverview = () => {
    navigate('/applicant/dashboard/applicant-overview')
    setIsActive("Applicant Overview")
  }

  const ApplicantSettings = () => {
    navigate('/applicant/dashboard/applicant-personal-profile')
    setIsActive("Applicant Settings")
  }

  const ApplicantAppliedJobs = () => {
    navigate('/applicant/dashboard/applicant-applied')
    setIsActive("Applied Jobs")
  }

  const ApplicantFav = () => {
    navigate('/applicant/dashboard/applicant-favourities')
    setIsActive("Favourite Jobs")
  }

  const RecruiterOverview = () => {
    navigate('/recruiter/dashboard/recruiter-overview')
    setIsActive("Recruiter Overview")
  }

  const RecruiterPostjob = () => {
    navigate('/recruiter/dashboard/recruiter-postjob')
    setIsActive("Post a Job")
  }

  const RecruiterMyjobs = () => {
    navigate('/recruiter/dashboard/recruiter-myjobs')
    setIsActive("My Jobs")
  }

  const RecruiterSettings = () => {
    navigate('/recruiter/dashboard/recruiter-settings')
    setIsActive("Recruiter Settings")
  }


  const [isOpen, setIsOpen] = useState(false)
  const OpenMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>

      <Dashboard>

        {/* --------- sidebar ----------- */}
        <SidebarMenu>
          {/* <div className='logo-flex'>
            <div><Logo className='Color' /></div>
            <div className='name'>MyJob</div>
          </div> */}
          <div className='Sidebar'>
            <ul className='Navlinks'>

              <li className={isActive === "Applicant Overview" ? "tab active" : "tab"} onClick={ApplicantOverview}>
                <Layers className='IconColor' />
                <a>Overview</a>
              </li>
              <li className={isActive === "Applied Jobs" ? "tab active" : "tab"} onClick={ApplicantAppliedJobs}>
                <Brief className='IconColor' />
                <a>Applied Jobs</a>
              </li>
              <li className={isActive === "Favourite Jobs" ? "tab active" : "tab"} onClick={ApplicantFav}>
                <Bookmark className='IconColor' />
                <a>Favourite Jobs</a>
              </li>
              <li className={isActive === "Applicant Settings" ? "tab active" : "tab"} onClick={ApplicantSettings}>
                <Gear className='IconColor' />
                <a>Settings</a>
              </li>
              <li className={isActive === "Recruiter Overview" ? "tab active" : "tab"} onClick={RecruiterOverview}>
                <Layers className='IconColor' />
                <a>Overview</a>
              </li>
              <li className={isActive === "Post a Job" ? "tab active" : "tab"} onClick={RecruiterPostjob}>
                <PlusCircle className='IconColor' />
                <a>Post a Job</a>
              </li>
              <li className={isActive === "My Jobs" ? "tab active" : "tab"} onClick={RecruiterMyjobs}>
                <Brief className='IconColor' />
                <a>My Jobs</a>
              </li>
              <li className={isActive === "Recruiter Settings" ? "tab active" : "tab"} onClick={RecruiterSettings}>
                <Gear className='IconColor' />
                <a>Settings</a>
              </li>

            </ul>
          </div>
        </SidebarMenu>
        {/* ------------ mobile sidebar ---------- */}
        <div className='menudiv'>
          <h3>Dashboard</h3>
          {isOpen ?
            <img src={Close} alt='img' className='Display' onClick={OpenMenu} /> :
            <img src={Menubar} alt='img' className='Display' onClick={OpenMenu} />
          }

        </div>
        {isOpen &&
          <MobileSidebar>
            <div className='Sidebar'>
              <ul className='Navlinks'>

                <li onClick={ApplicantOverview}>
                  <Layers className='IconColor' />
                  <a>Overview</a>
                </li>
                <li onClick={ApplicantAppliedJobs}>
                  <Brief className='IconColor' />
                  <a>Applied Jobs</a>
                </li>
                <li onClick={ApplicantFav}>
                  <Bookmark className='IconColor' />
                  <a>Favourite Jobs</a>
                </li>
                <li onClick={ApplicantSettings}>
                  <Gear className='IconColor' />
                  <a>Settings</a>
                </li>
                <li onClick={RecruiterOverview}>
                  <Layers className='IconColor' />
                  <a>Overview</a>
                </li>
                <li onClick={RecruiterPostjob}>
                  <PlusCircle className='IconColor' />
                  <a>Post a Job</a>
                </li>
                <li onClick={RecruiterMyjobs}>
                  <Brief className='IconColor' />
                  <a>My Jobs</a>
                </li>
                <li onClick={RecruiterSettings}>
                  <Gear className='IconColor' />
                  <a>Settings</a>
                </li>
              </ul>
            </div>
          </MobileSidebar>

        }
        {/* ------------------------------- */}
        <div className='dashboard-size'>
          <div>{children}</div>
        </div>
      </Dashboard>

    </div>
  )
}

export default DashboardLayouts