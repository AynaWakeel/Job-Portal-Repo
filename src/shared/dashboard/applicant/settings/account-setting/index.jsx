import React, { useState } from 'react'
import { Form, QrForm, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../../../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../../../../assets/icons/eye-close.svg'
import ScanCode from '../../../../../components/qrcode'
import ReactSwitch from 'react-switch'
import { useForm } from 'react-hook-form'
import { useApplicant } from '../../useApplicant'

const ApplicantAccountSetting = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const {profile_setting} = useApplicant()
    const onSubmit = (data) => {
        profile_setting(data)
        console.log(data)
    }
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = nextChecked => {
        setIsChecked(nextChecked);
    };


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
                <div>
                    <h1 className='TopHeading'>Contact Information</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Form>
                            <div className='FormSpace'>
                                <label htmlFor='location' className='Label'>Location</label>
                                <input type="text" placeholder='Location' className='FormInput'
                                    {...register("location", { required: "location is req." })} />
                            </div>
                            <div className='FormError'>
                                {errors.location && <p>location id required.</p>}
                            </div>
                            <div className='FormSpace'>
                                <label htmlFor='phoneNumber' className='Label'>Phone Number</label>
                                <input type="tel" placeholder='Number' className='FormInput'
                                    {...register("phoneNumber", { required: "phoneNumber is req." })} />
                            </div>
                            <div className='FormError'>
                                {errors.phoneNumber && <p>phoneNumber id required.</p>}
                            </div>
                            <div className='FormSpace'>
                                <label htmlFor='' className='Label'>Email</label>
                                <input type="email" placeholder='Email' className='FormInput'
                                    {...register("email", { required: "email is req." })} />
                            </div>
                            <div className='FormError'>
                                {errors.email && <p>email id required.</p>}
                            </div>

                            <button type='submit' className='FormBtn'>Save Changes</button>
                        </Form>
                    </div>
                </form>

                <div className='Gapdiv '>
                    <h1 className='TopHeading'>Two Factor Authentication</h1>
                    {/* <span className='SubHeading'>You want to on two factor authentication?</span> */}
                    <div>
                        <ReactSwitch
                            checked={isChecked}
                            onChange={handleChange}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={24}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={22}
                            width={48}
                        />
                    </div>

                    {isChecked ?

                        (<div>
                            <div className='middiv'>
                                <div className='QRBox'>
                                    <ScanCode />
                                </div>
                            </div>
                            <QrForm>
                                <div className='Formdiv'>
                                    <div className='flex-col'>
                                        {/* <label htmlFor='' className='Label'>Code</label> */}
                                        <input type="" placeholder='Code' className='qrInput' />
                                        <button type='submit' className='Btn'>Save</button>

                                    </div>
                                </div>

                            </QrForm>
                        </div>)

                        :

                        <span className='SubHeading'>You want to on two factor authentication?</span>

                    }

                </div>


                <div className='Gapdiv'>
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

            </SettingDiv>
        </div>
    )
}

export default ApplicantAccountSetting