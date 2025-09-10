import React, { useState } from 'react'
import { Form, FormDiv, TextDiv } from './style'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

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

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  const password = watch("password")



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

              <form  onSubmit={handleSubmit(onSubmit)}>
              <Form >

                <div className='FormSpace'>
                  <div className='FormPassword'>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='FormInput ' 
                    {...register("password", { required: 'enter your password' })}
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
                <div className='FormError'>
                  {errors.password && <span>Password is required</span>}
                </div>

                <div className='FormSpace'>
                  <div className='FormPassword'>
                    <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput' 
                    {...register("confirmPassword", { required: 'enter your confirm password' ,
                      validate:(value)=>{
                        if(!value) return "Password is req."
                        if(value !== password) return "Password do not match"
                        return true
                      }
                    })}
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
                <div className='FormError'>
                  {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>

                <button type='submit' className='FormBtn' 
                // onClick={Login}
                >Reset</button>
              </Form>
              </form>

            </div>
          </FormDiv>
    </div>
  )
}

export default ResetPassword