import React, { useState } from 'react'
import { MobileSidebar, SidebarMenu } from './style'
import { ReactComponent as Layers } from '../../assets/icons/fi_layers.svg'
import { ReactComponent as Bookmark } from '../../assets/icons/BookmarkSimple.svg'
import { ReactComponent as Gear } from '../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../assets/icons/PlusCircle.svg'
import { ReactComponent as Brief } from '../../assets/icons/Briefcase.svg'
import { ReactComponent as Logo } from '../../assets/icons/briefcase2.svg'
import Menubar from '../../assets/icons/fi_menu.svg'
import Close from '../../assets/icons/fi_x.svg'
import { useLocation, useNavigate } from 'react-router'
import { ROLE } from '../../enum/roles'


const DashboardSidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)
    const OpenMenu = () => {
        setIsOpen(!isOpen)
    }

    const RecruiterOptions = [
        { label: "Overview", icon: <Layers />, path: "/recruiter/dashboard/overview" },
        { label: "My Jobs", icon: <Brief />, path: "/recruiter/dashboard/myjobs" },
        { label: "Post a Job", icon: <PlusCircle />, path: "/recruiter/dashboard/postjob" },
        { label: "All Jobs", icon: <Brief />, path: "/recruiter/dashboard/alljobs" },
        { label: "Settings", icon: <Gear />, path: "/recruiter/dashboard/settings" },
    ]

    const ApplicantOptions = [
        { label: "Overview", icon: <Layers />, path: "/applicant/dashboard/overview" },
        { label: "Applied Jobs", icon: <Brief />, path: "/applicant/dashboard/applied" },
        { label: "Favourite Jobs", icon: <Bookmark />, path: "/applicant/dashboard/favourities" },
        { label: "Settings", icon: <Gear />, path: "/applicant/dashboard/personal-profile" },
    ]
    

    const userRole = localStorage.getItem("role")  
    let Menu = [];
    if (userRole === ROLE.APPLICANT)  Menu = ApplicantOptions;
    else if (userRole === ROLE.RECRUITER )  Menu = RecruiterOptions;
    console.log(localStorage.getItem("role"))


    return (
        <div>

            {/* --------- sidebar ----------- */}
            <SidebarMenu>

                <div className='Sidebar'>
                    <ul className='Navlinks'>

                        {Menu.map((item) => (

                            <li key={item.path} onClick={() => navigate(item.path)}
                                className={`tab ${location.pathname === item.path ? " active" : ""}`}>
                                <div className='IconColor' >{item.icon}</div>
                                <a>{item.label}</a>
                            </li>

                        ))}
                       

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

                            {Menu.map((item) => (

                            <li key={item.path} onClick={() => navigate(item.path)}
                                className={`tab ${location.pathname === item.path ? " active" : ""}`}>
                                <div className='IconColor' >{item.icon}</div>
                                <a>{item.label}</a>
                            </li>

                            ))}

                        </ul>
                    </div>
                </MobileSidebar>

            }


        </div>
    )
}

export default DashboardSidebar