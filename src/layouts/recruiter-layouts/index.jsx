import React from 'react'
import RecruiterNavbar from '../../components/navbar/recruiter'
import { ToastContainer } from 'react-toastify'

const RecruiterLayouts = ({ children }) => {
  return (
    <div>
      <RecruiterNavbar />
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

export default RecruiterLayouts