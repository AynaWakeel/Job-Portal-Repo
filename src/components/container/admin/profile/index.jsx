import React, { useEffect, useState } from 'react'
import { Form, Main, ProfilePic } from './style'
import Upload from '../../../../assets/icons/fi_upload-cloud.svg'
import { ReactComponent as EyeIcon } from '../../../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../../../assets/icons/eye-close.svg'
import { useForm } from 'react-hook-form'
import { useAdmin } from '../useAdmin'
import { Admin_Endpoints } from '../../../../lib/api/admin_endpoints'
import { showError, showSuccess } from '../../../toasters'

const AdminProfile = () => {
    const {
      register,
      reset,
      handleSubmit,
      formState: {errors}
    } = useForm()

    const [hasData, setHasData] = useState(false)
  
    const {update_admin_profile, upload_admin_photo , change_admin_password} = useAdmin()

    useEffect(()=>{
        const fetchData = async()=>{
            const prev = await Admin_Endpoints.get_profile()
            if(prev?.data){
              reset(prev.data)
              setHasData(true)
            }else{
                reset({
                    fullName:"",
                    phoneNumber:""
                })
                setHasData(false)
            }
        }
        fetchData()
    },[reset])

    const onSubmit = (data) =>{
        update_admin_profile(data)
        console.log("data")
    }

    const handleProfilePic = (e) => {
    const file = e.target.files[0]
    if (file) {
      const picData = new FormData()
      picData.append("profilepic", file)
      upload_admin_photo(picData);
    }
  }

  const handleChangepassword = (data) =>{
    const {oldPassword , newPassword , confirmPassword} = data
    if(oldPassword === newPassword){
        showError("Enter new Password..")
    }else if(newPassword !== confirmPassword){
        showError("Password donot match")
    }else{
        change_admin_password(data)
    }
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

            <Main>
                <div>
                    <h1 className='TopHeading'>Profile</h1>
                </div>


                <div className='Divide'>
                    <div>
                        <h3 className='SubHeading'>Profile Picture</h3>
                        <ProfilePic>
                            <label className='center'>
                                <div><img src={Upload} alt='upload' /></div>
                                <div>
                                    <h5 className='TopHeading'>Browse photo <span>or drop here</span></h5>
                                    <h6 className='Para'>A photo larger than 400 pixels work best. Max photo size 5 MB.</h6>
                                    <input type="file" accept=".png" hidden onChange={handleProfilePic}/>
                                </div>
                            </label>
                        </ProfilePic>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <Form>
                        <div className='FormSpace FormInputDivide'>
                            <div className='InputWidth'>
                                <label htmlFor='' className='Label'>Name</label>
                                <input type="text" placeholder='Name' className='FormInput'
                                  {...register("fullName",{required:"name is req"})} />
                            </div>
                              <div className='FormError'>
                                {errors.location && <p>Location is required.</p>}
                            </div>

                            <div className='InputWidth'>
                                <label htmlFor='' className='Label'>Email</label>
                                <input type="email" placeholder='Email' className='FormInput'  readOnly 
                                  {...register("email")}/>
                            </div>
                        </div>

                        <div className='FormSpace'>
                            <label htmlFor='' className='Label'>Phone Number</label>
                            <input type="tel" placeholder='Number' className='FormInput'
                              {...register("phoneNumber")}/>
                        </div>

                        <button type='submit' className='FormBtn'>Save Changes</button>
                    </Form>

                    </form>

                </div>

                <div className='ChangePassworddiv'>
                    <h1 className='Title'>Change Password</h1>

                    <form onSubmit={handleSubmit(handleChangepassword)}>

                    <Form>
                        <div className='FormSpace FormInputDivide'>
                            <div className='InputWidth'>
                                <label htmlFor='' className='Label'>Current Password</label>
                                <input type={isPasswordVisible ? "text" : "password"} placeholder='Current Password' className='FormInput' {...register("oldPassword",{required:"oldPassword is required."})}/>
                                <div onClick={PasswordVisibility}>
                                    {isPasswordVisible ?
                                        <EyeIcon className='eyeimg' /> :
                                        <EyeClose className='eyeimg' />
                                    }
                                </div>
                              <div className='FormError'>
                                {errors.oldPassword && <p>oldPassword is required.</p>}
                            </div>
                            </div>
                            <div className='InputWidth'>
                                <label htmlFor='' className='Label'>New Password</label>
                                <input type={isNewPasswordVisible ? "text" : "password"} placeholder='New Password' className='FormInput'  {...register("newPassword",{required:"New Password is required."})} />
                                <div onClick={NewPasswordVisibility}>
                                    {isNewPasswordVisible ?
                                        <EyeIcon className='eyeimg' /> :
                                        <EyeClose className='eyeimg' />
                                    }
                                </div>
                              <div className='FormError'>
                                {errors.newPassword && <p>newPassword is required.</p>}
                            </div>
                            </div>
                            <div className='InputWidth'>
                                <label htmlFor='' className='Label'>Confirm Password</label>
                                <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput' {...register("confirmPassword",{required:"Confirm Password is required."})} />
                                <div onClick={ConfirmationVisibility}>
                                    {isConfirmationVisible ?
                                        <EyeIcon className='eyeimg' /> :
                                        <EyeClose className='eyeimg' />
                                    }
                                </div>
                              <div className='FormError'>
                                {errors.confirmPassword && <p>confirmPassword is required.</p>}
                            </div>
                            </div>
                        </div>

                        <button type='submit' className='FormBtn'>Save Changes</button>
                    </Form>

                    </form>
                </div>

            </Main>


        </div>
    )
}

export default AdminProfile