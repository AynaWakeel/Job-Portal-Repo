import React, { useEffect } from 'react'
import ApplicantNavbar from '../../components/navbar/applicant'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'
import { showSuccess } from '../../components/toasters'

const ApplicantLayouts = ({ children }) => {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const token = params.get("token");

  //   if (token) {
  //     localStorage.setItem("token", token);
  //     showSuccess("Login successful with Google");
  //     window.history.replaceState({}, document.title, "applicant/dashboard");
  //   }
  // }, [navigate]);


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