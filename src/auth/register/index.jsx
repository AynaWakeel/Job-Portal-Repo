import React, { useState } from 'react'
import { Checkbox, ForgetDiv, Form, FormDiv, SocialMediaDiv, TextDiv } from './style'
import google from '../../assets/icons/google-icon.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import UseAuth from '../useAuth'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { signup, send_otp, signin_google} = UseAuth()

    const onSubmit = async (formData) => {
        try {
            const signupRes = await signup(formData);
            if (!signupRes) return;

            const { email } = formData;

            const otpRes = await send_otp({ email, type: "email_verification" });
            if (!otpRes) return;
            navigate("/auth/otp", { state: { email, type: "email_verification" } });

        } catch (err) {
            console.error("Signup failed.", err);
        }

    }

    const password = watch("password")

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


    return (
        <div>


            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Create Account</h1>
                    <TextDiv>
                        <span className='Text'>Already have an account </span>
                        <span><a onClick={Login} className='Ahref'>Login</a></span>
                    </TextDiv>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Form >
                            <div className='FormSpace FormInputDivide'>
                                <div>
                                    <input type="text" placeholder='Full Name' className='FormInput'
                                        {...register('fullName', { required: "Enter your Full Name" })}
                                    />
                                </div>

                                <div>
                                    <input type="text" placeholder='Username' className='FormInput'
                                        {...register('username', { required: "Enter your Username" })}
                                    />
                                </div>
                            </div>
                            <div className='FormInputDivide'>

                                <div className='FormError'>
                                    {errors.username && <p>Username id required.</p>}
                                </div>
                                <div className='FormError'>
                                    {errors.fullName && <p>Full Name id required.</p>}
                                </div>
                            </div>

                            <div className='FormSpace'>
                                <input type="email" placeholder='Email' className='FormInput'
                                    {...register('email', { required: "Enter your email" })}
                                />
                            </div>
                            <div className='FormError'>
                                {errors.email && <p>Email is required.</p>}
                            </div>

                            <div className='FormSpace'>
                                <div className='FormPassword'>
                                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='FormInput'
                                        {...register('password', { required: "Enter your password" })}
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
                                {errors.password && <p>Password id required.</p>}
                            </div>

                            <div className='FormSpace'>
                                <div className='FormPassword'>
                                    <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput '
                                        {...register('confirmPassword', {
                                            required: "Enter your confirm Password",
                                            validate: (value) => {
                                                if (!value)
                                                    return "Confirm Password id required."
                                                if (value !== password)
                                                    return "Password do not match"
                                                return true
                                            }
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
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                            </div>

                            <ForgetDiv>
                                <span className='CheckBoxSpan'>
                                    <div className='FormInputDivide'>
                                        <Checkbox type="radio" id='recruiter' name='role'
                                            value='recruiter'
                                            {...register('role', { required: "Enter your role" })}
                                        />
                                        <label htmlFor='recruiter'>Recruiter</label>
                                    </div>
                                    <div className='FormInputDivide'>
                                        <Checkbox type="radio" id='applicant' name='role'
                                            value='applicant'
                                            {...register('role', { required: "Enter your role" })}
                                        />
                                        <label htmlFor='applicant'>Applicant</label>
                                    </div>
                                </span>
                            </ForgetDiv>
                            <div className='FormError'>
                                {errors.role && <p>role id required.</p>}
                            </div>
                            <button type='submit' className='FormBtn'>Register</button>

                            <h5 className='OR'>OR</h5>
                            <SocialMediaDiv>
                                <button className='MediaBtn'>
                                    {/* <img src={google} alt="icon" className='GoogleIcon' /> */}
                                    <GoogleLogin
                                        onSuccess={async (credentialResponse) => {
                                            const token = credentialResponse.credential;
                                            const userInfo = jwtDecode(token);
                                            console.log("info", userInfo);

                                            const res = await signin_google({ token });
                                            if (res) {
                                                navigate('/applicant/dashboard');
                                            }
                                        }} />
                                </button>
                            </SocialMediaDiv>
                        </Form>
                    </form>

                </div>
            </FormDiv>

        </div>
    )
}

export default Register