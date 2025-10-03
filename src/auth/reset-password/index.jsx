import React, { useState } from 'react'
import { Form, FormDiv, TextDiv } from './style'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import { useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import UseAuth from '../useAuth'
import { showError } from '../../components/toasters'

const ResetPassword = () => {
  const {state} = useLocation()
  const navigate = useNavigate()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const PasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

  const ConfirmationVisibility = () => {
    setIsConfirmationVisible(!isConfirmationVisible)
  }

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { reset_password } = UseAuth()
  const tempToken = state?.tempToken

  const onSubmit = async(data) => {
    const { newPassword, confirmPassword} = data
    if(newPassword !== confirmPassword){
      showError('Password do not match')
      return
    }
    const res = await reset_password({ newPassword, tempToken})
    if(res){
      navigate('/auth/login', { state: { tempToken } })
    }
  }

  return (
    <div>
      
          <FormDiv>
            <div className='FormBox'>
              <h1 className='FormH1'>Reset Password</h1>
              <TextDiv>
                <span className='Text'>Set a new password </span>
              </TextDiv>

              <form  onSubmit={handleSubmit(onSubmit)}>
              <Form >

                <div className='FormSpace'>
                  <div className='FormPassword'>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='FormInput ' 
                    {...register("newPassword", { required: 'Enter your newpassword' })}
                    />
                    
                    <div onClick={PasswordVisibility}>
                      {isPasswordVisible ?
                        <EyeIcon className='eyeimg' /> :
                        <EyeClose className='eyeimg' />
                      }
                    </div>
                  </div>
                </div>
                <div className='FormError'>
                  {errors.newPassword && <span>Password is required</span>}
                </div>

                <div className='FormSpace'>
                  <div className='FormPassword'>
                    <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput' 
                    {...register("confirmPassword", { required: 'enter your confirm password' ,
                    })}
                    />
                    <div onClick={ConfirmationVisibility} >
                      {isConfirmationVisible ?
                        <EyeIcon className='eyeimg' /> :
                        <EyeClose className='eyeimg' />
                      }
                    </div>
                  </div>
                </div>
                <div className='FormError'>
                  {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>

                <button type='submit' className='FormBtn' >Reset</button>
              </Form>
              </form>

            </div>
          </FormDiv>
    </div>
  )
}

export default ResetPassword