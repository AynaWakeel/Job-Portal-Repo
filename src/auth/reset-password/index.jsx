import React, { useState } from 'react'
import { Form, FormDiv, TextDiv } from './style'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import { useNavigate } from 'react-router'

const ResetPassword = () => {
  const navigate = useNavigate()

  const Login = () => {
    navigate('/auth/login')
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const PasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

  const ConfirmationVisibility = () => {
    setIsConfirmationVisible(!isConfirmationVisible)
  }

  // const [formData, setFormData] = useState({
  //   password: '',
  //   confirmPassword: ''
  // })

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   if (formData.password !== formData.confirmPassword) {
  //     alert('password donot match')
  //     return;
  //   }
  // }

  return (
    <div>
      
          <FormDiv>
            <div className='FormBox'>
              <h1 className='FormH1'>Reset Password</h1>
              <TextDiv>
                <span className='Text'>Set a new password </span>
              </TextDiv>
              <Form 
              // onSubmit={handleSubmit}
              >
                <div className='FormSpace'>
                  <div className='FormPassword'>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='FormInput ' 
                    // value={formData.password} onChange={handleChange} 
                    />
                    <div onClick={PasswordVisibility}>
                      {isPasswordVisible ?
                        <EyeIcon className='eyeimg' /> :
                        <EyeClose className='eyeimg' />
                      }
                    </div>
                  </div>
                </div>
                <div className='FormSpace'>
                  <div className='FormPassword'>
                    <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput' 
                    // value={formData.confirmPassword} onChange={handleChange} 
                    />
                    <div onClick={ConfirmationVisibility} >
                      {isConfirmationVisible ?
                        <EyeIcon className='eyeimg' /> :
                        <EyeClose className='eyeimg' />
                      }
                    </div>
                  </div>
                </div>
                <button className='FormBtn' onClick={Login}>Reset</button>
              </Form>

            </div>
          </FormDiv>
    </div>
  )
}

export default ResetPassword