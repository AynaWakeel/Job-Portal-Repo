import React, { useEffect } from 'react'
import ApplicantNavbar from '../../components/navbar/applicant'
import { ToastContainer } from 'react-toastify'
import { connectSocket, disconnectSocket, socket } from '../../lib/socket/socket';


const ApplicantLayouts = ({ children }) => {

    useEffect(() => {
    connectSocket(); 
    return () => disconnectSocket();
  }, []);
  
  return (
    <div>
      <ApplicantNavbar socket={socket}/>
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