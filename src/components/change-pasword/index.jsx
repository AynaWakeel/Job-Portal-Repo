import React, { useState } from 'react'
import { Form, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import { useForm } from 'react-hook-form'
import { showError } from '../../components/toasters'
import { useApplicant } from '../../shared/dashboard/applicant/useApplicant'

const ChangePasswordComp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const { change_applicant_password } = useApplicant()

    const onChangepassword = async(data) => {
        const { oldPassword, newPassword, confirmPassword } = data
        if (oldPassword === newPassword) {
            showError("Enter new Password..")
            return
        } else if (newPassword !== confirmPassword) {
            showError("Password donot match")
            return
        }else{
            await change_applicant_password(data)
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
            <SettingDiv>


                <div className='Gapdiv'>
                    <h1 className='TopHeading'>Change Password</h1>

                    <form onSubmit={handleSubmit(onChangepassword)}>

                    <Form>
                        <div className='FormSpace FormInputDivide'>
                            <div className='InputWidth'>
                                <label htmlFor='' className='Label'>Current Password</label>
                                <input type={isPasswordVisible ? "text" : "password"} placeholder='Current Password' className='FormInput'  
                                {...register("oldPassword", { required: "oldPassword is required." })} />
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
                                <input type={isNewPasswordVisible ? "text" : "password"} placeholder='New Password' className='FormInput' 
                                {...register("newPassword", { required: "New Password is required." })} />
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
                                <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput' 
                                {...register("confirmPassword", { required: "Confirm Password is required." })} />
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

            </SettingDiv>
        </div>
    )
}

export default ChangePasswordComp