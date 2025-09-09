import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { SidebarMenu } from './style'
import { ReactComponent as Layers } from '../../../assets/icons/fi_layers.svg'
import { ReactComponent as Gear } from '../../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../../assets/icons/PlusCircle.svg'
import { ReactComponent as Brief } from '../../../assets/icons/Briefcase.svg'
import { ReactComponent as File } from '../../../assets/icons/fi_file-text.svg'
import { ReactComponent as Home } from '../../../assets/icons/fi_home.svg'

const AdminSidebar = () => {
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
            navigate('/admin/dashboard/overview')
            setIsActive("View Analytics")
        }
    return (
        <div>

            <SidebarMenu>
                <div className='Sidebar'>
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
            </SidebarMenu>

        </div>
    )
}

export default AdminSidebar