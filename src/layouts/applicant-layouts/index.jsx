import React, { useEffect } from 'react'
import ApplicantNavbar from '../../components/navbar/applicant'
import { ToastContainer } from 'react-toastify'


const ApplicantLayouts = ({ children }) => {
  
  return (
    <div>
      <ApplicantNavbar />
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
  )
}

export default ApplicantLayouts