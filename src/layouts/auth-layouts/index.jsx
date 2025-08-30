import React from 'react'
import { AuthDiv, FormSec, ImgSec } from './style'
import login from '../../assets/images/welcome1.jpg'

const AuthLayouts = ({ children }) => {
  return (
    <div>
      <AuthDiv>
        <ImgSec>
          <img src={login} alt="login" className='LoginImg' />
        </ImgSec>
        <FormSec>
          <div>{children}</div>
        </FormSec>
      </AuthDiv>
    </div>
  )
}

export default AuthLayouts