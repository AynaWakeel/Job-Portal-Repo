import React, { useEffect, useState } from 'react'
import { Dashboard } from './style'
import DashboardSidebar from '../../components/dashboard-sidebar'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'
import { showSuccess } from '../../components/toasters'

const DashboardLayouts = ({ children }) => {

  return (
    <div>

      <Dashboard>


        <DashboardSidebar />

        <div className='dashboard-size'>
          <div>
            {children}


            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            // transition={Bounce}
            />
            
          </div>
        </div>
      </Dashboard>

    </div>
  )
}

export default DashboardLayouts