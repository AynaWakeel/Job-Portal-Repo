import React, { useState } from 'react'
import { Dashboard, SidebarMenu } from './style'
import { useLocation } from 'react-router'
import AdminNavbar from '../../components/navbar/admin'
import AdminSidebar from '../../components/container/sidebar'

const AdminDashboardLayouts = ({ children }) => {
   

    const location = useLocation()
    
    const noSidebar = ['/admin/dashboard/job-detail', '/admin/dashboard/applicant-profile']
    const hideSidebar = noSidebar.some(path => location.pathname.startsWith(path))

    console.log(location,'here is the admin pages without sidebar');


    return (
        <div>

            <AdminNavbar />

            <Dashboard>

                {/* --------- sidebar ----------- */}
                {!hideSidebar && 
                <AdminSidebar/>
                }

                {/* ------------------------------- */}
                <div  className={`dashboard-size ${hideSidebar ? 'full-width' : ''}`}>
                    {children}
                </div>
            </Dashboard>
        </div>
    )
}

export default AdminDashboardLayouts