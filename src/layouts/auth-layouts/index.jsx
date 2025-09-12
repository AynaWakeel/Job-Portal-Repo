import React, { useEffect, useState } from 'react'
import { AuthDiv, FormSec, ImgSec } from './style'
import login from '../../assets/images/welcome1.jpg'
import { ReactComponent as Brief } from '../../assets/icons/briefcase2.svg'
import Loader from '../../components/loading-spinner'
import { ToastContainer } from 'react-toastify'


const AuthLayouts = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return (
    <div>

      {isLoading ? <Loader /> :

        <AuthDiv>

          <ImgSec>
            <div className='logo-flex'>
              <div><Brief className='Color' /></div>
              <div className='name'>MyJob</div>
            </div>
            <img src={login} alt="login" className='LoginImg' />
          </ImgSec>
          <FormSec>
            <div className='logo-flex'>
              <div><Brief className='Color' /></div>
              <div className='name'>MyJob</div>
            </div>
            <div>{children}</div>

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
          </FormSec>

        </AuthDiv>
      }

    </div>
  )
}

export default AuthLayouts