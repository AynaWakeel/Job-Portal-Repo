import React, { useEffect, useState } from 'react'
import { Form, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../../../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../../../../assets/icons/eye-close.svg'
import { useForm } from 'react-hook-form'
import { useRecruiter } from '../../useRecruiter'
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints'
import { showError, showSuccess } from '../../../../../components/toasters'
import TwoFactorComp from '../../../../../components/two-factor-comp'
import ChangePasswordComp from '../../../../../components/change-pasword'

const RecruiterAccountSetting = () => {
  const [hasData, setHasData] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const { company_profile } = useRecruiter()


  useEffect(() => {
    const fetchData = async () => {

      const previousData = await Recruiter_Endpoints.get_company_profile()
      if (previousData?.data) {
        reset(previousData.data)
        setHasData(true)
      } else {
        reset({
          location: "",
          phoneNumber: "",
          email: ""
        })
        setHasData(false)
      }
    }
    fetchData()
  }, [reset])

  const onSubmit = (data) => {
    
    if (data.phoneNumber) data.phoneNumber = Number(data.phoneNumber);

    if (isNaN(data.phoneNumber)) {
      showError("Phone Number must be a number");
      return;
    }
    company_profile(data)
    console.log(data)
  }


  return (
    <div>
      <SettingDiv>
        <div>
          <h1 className='TopHeading'>Contact Information</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <input type="tel" maxLength={12} placeholder='Number' className='FormInput'
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

              <button type='submit' className='FormBtn'>
                {hasData ?
                  "Update" :
                  "Save"
                }
              </button>
            </Form>
          </form>
        </div>

        <TwoFactorComp />


        <ChangePasswordComp />


      </SettingDiv>
    </div>
  )
}

export default RecruiterAccountSetting