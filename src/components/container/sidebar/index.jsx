import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { SidebarMenu } from './style'
import { ReactComponent as Layers } from '../../../assets/icons/fi_layers.svg'
import { ReactComponent as Gear } from '../../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../../assets/icons/PlusCircle.svg'
import { ReactComponent as Brief } from '../../../assets/icons/Briefcase.svg'
import { ReactComponent as File } from '../../../assets/icons/fi_file-text.svg'
import { ReactComponent as Home } from '../../../assets/icons/fi_home.svg'

const AdminSidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const AdminOptions = [
        { label: "View Analytics", icon: <Home />, path: "/admin/dashboard/overview" },
        { label: "Manage Users", icon: <Layers />, path: "/admin/dashboard/manage-users" },
        { label: "Manage Jobs", icon: <Brief  />, path: "/admin/dashboard/manage-jobs" },
        { label: "User Accounts", icon: <Gear />, path: "/admin/dashboard/user-accounts" },
        { label: "Manage Category", icon: <PlusCircle />, path: "/admin/dashboard/manage-category" },
        { label: "Manage CMS", icon: <File />, path: "/admin/dashboard/manage-cms" },

    ]

    return (
        <div>

            <SidebarMenu>
                <div className='Sidebar'>
                    <ul className='Navlinks'>

                        {AdminOptions.map((item) => (

                            <li key={item.path} onClick={() => navigate(item.path)}
                                className={`tab ${location.pathname === item.path ? 'active' : ''}`}>
                                <div className='IconColor' >{item.icon}</div>
                                <a>{item.label}</a>
                            </li>

                        ))}

                    </ul>
                </div>
            </SidebarMenu>

        </div>
    )
}

export default AdminSidebar