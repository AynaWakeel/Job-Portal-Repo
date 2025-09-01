import React from 'react'
import { AuthDiv, FormSec, ImgSec } from './style'
import login from '../../assets/images/welcome1.jpg'
import { ReactComponent as Brief } from '../../assets/icons/briefcase2.svg'


const AuthLayouts = ({ children }) => {
  return (
    <div>
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
        </FormSec>
      </AuthDiv>
    </div>
  )
}

export default AuthLayouts