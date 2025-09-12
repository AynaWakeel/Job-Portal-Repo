import React, { useState } from 'react'
import { Dashboard } from './style'
import DashboardSidebar from '../../components/dashboard-sidebar'

const DashboardLayouts = ({ children }) => {
 
  return (
    <div>

      <Dashboard>


        <DashboardSidebar/>

        <div className='dashboard-size'>
          <div>{children}</div>
        </div>
      </Dashboard>

    </div>
  )
}

export default DashboardLayouts