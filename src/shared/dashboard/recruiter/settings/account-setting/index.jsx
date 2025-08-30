import React, { useState } from 'react'
import { Form, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../../../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../../../../assets/icons/eye-close.svg'

const RecruiterAccountSetting = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const PasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)

  const NewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible)
  }

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

  const ConfirmationVisibility = () => {
    setIsConfirmationVisible(!isConfirmationVisible)
  }
  return (
    <div>
      <SettingDiv>
        <form onSubmit="">
          <div>
            <h1 className='TopHeading'>Contact Information</h1>
          </div>
          <div>
            <Form>
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Location</label>
                <input type="text" placeholder='Location' className='FormInput' />
              </div>
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Phone Number</label>
                <input type="tel" placeholder='Number' className='FormInput' />
              </div>
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Email</label>
                <input type="email" placeholder='Email' className='FormInput' />
              </div>

              <button type='submit' className='FormBtn'>Save Changes</button>
            </Form>
          </div>


          <div className='ChangePassworddiv'>
            <h1 className='TopHeading'>Change Password</h1>
            <Form>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Current Password</label>
                  <input type={isPasswordVisible ? "text" : "password"} placeholder='Current Password' className='FormInput' />
                  <div onClick={PasswordVisibility}>
                    {isPasswordVisible ?
                      <EyeIcon className='eyeimg' /> :
                      <EyeClose className='eyeimg' />
                    }
                  </div>
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>New Password</label>
                  <input type={isNewPasswordVisible ? "text" : "password"} placeholder='New Password' className='FormInput' />
                  <div onClick={NewPasswordVisibility}>
                    {isNewPasswordVisible ?
                      <EyeIcon className='eyeimg' /> :
                      <EyeClose className='eyeimg' />
                    }
                  </div>
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Confirm Password</label>
                  <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput' />
                  <div onClick={ConfirmationVisibility}>
                    {isConfirmationVisible ?
                      <EyeIcon className='eyeimg' /> :
                      <EyeClose className='eyeimg' />
                    }
                  </div>
                </div>
              </div>

              <button type='submit' className='FormBtn'>Save Changes</button>
            </Form>
          </div>

        </form>
      </SettingDiv>
    </div>
  )
}

export default RecruiterAccountSetting