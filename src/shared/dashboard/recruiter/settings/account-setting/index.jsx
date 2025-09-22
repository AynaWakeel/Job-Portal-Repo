import React, { useEffect, useState } from 'react'
import { Form, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../../../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../../../../assets/icons/eye-close.svg'
import { useForm } from 'react-hook-form'
import { useRecruiter } from '../../useRecruiter'
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints'

const RecruiterAccountSetting = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const {company_profile} = useRecruiter()

  const [hasData, setHasData] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        const previousData = await Recruiter_Endpoints.get_company_profile();
        if (previousData) {
          reset(previousData);
          setHasData(true);
        } else {
          reset({
            
  
          });
          setHasData(false);
        }
      };
      fetchData();
    }, [reset]);

  const onSubmit = (data) => {
    company_profile(data)
    console.log(data)
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className='TopHeading'>Contact Information</h1>
          </div>
          <div>
            <Form>
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Location</label>
                <input type="text" placeholder='Location' className='FormInput'
                  {...register("location", { required: "Locaation is req." })} />
              </div>
              <div className='FormError'>
                {errors.location && <p>Location is required.</p>}
              </div>

              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Phone Number</label>
                <input type="tel" placeholder='Number' className='FormInput'
                  {...register("phoneNumber", { required: "phone Number is req." })} />
              </div>
              <div className='FormError'>
                {errors.phoneNumber && <p>Phone Number is required.</p>}
              </div>

              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Email</label>
                <input type="email" placeholder='Email' className='FormInput'
                  {...register("email", { required: "Email is req." })} />
              </div>
              <div className='FormError'>
                {errors.email && <p>Email is required.</p>}
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