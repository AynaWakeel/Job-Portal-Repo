import React, { useState } from 'react'
import { Checkbox, ForgetDiv, Form, FormDiv, SocialMediaDiv, TextDiv } from './style'
import google from '../../assets/icons/google-icon.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import UseAuth from '../useAuth'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
import { showError } from '../../components/toasters'

const Login = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    console.log('client id:', process.env.REACT_APP_GOOGLE_CLIENT_ID);

    const { login, signin_google } = UseAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {

            await login(data)
           
        } catch (err) {
            showError(err)
            console.log(err);
        }

    }

    const Register = () => {
        navigate('/auth/register')
    }
    const ForgetPassword = () => {
        navigate('/auth/forget')
    }


    const Visibility = () => {
        setIsVisible(!isVisible)
    }


    return (
        <div>

            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Sign In</h1>
                    <TextDiv>
                        <span className='Text'>Dont have an account? </span>
                        <span><a onClick={Register} className='Ahref'>Create Account</a></span>
                    </TextDiv>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Form>
                            <div className='FormSpace'>
                                <input type="email" placeholder='Email' className='FormInput'
                                    {...register('email', { required: "Enter your email" })} />
                            </div>
                            <div className='FormError'>
                                {errors.email && <p>Email is required.</p>}
                            </div>
                            <div className='FormSpace'>
                                <div className='FormPassword'>
                                    <input type={isVisible ? "text" : "password"} placeholder='Password' className='FormInput'
                                        {...register('password', { required: "Enter your password" })} />
                                    <div onClick={Visibility}>
                                        {isVisible ?
                                            <EyeIcon className='eyeimg' /> :
                                            <EyeClose className='eyeimg' />
                                        }
                                    </div>
                                </div>
                                <div className='FormError'>
                                    {errors.password && <p>Password id required.</p>}
                                </div>
                            </div>

                            <ForgetDiv>
                                {/* <span className='CheckBoxSpan'>
                                    <Checkbox type="checkbox" />Remember Me
                                </span> */}
                                <span><a onClick={ForgetPassword} className='ForgetText'>Forgot Password?</a></span>
                            </ForgetDiv>
                            <button type='submit' className='FormBtn'>Sign In</button>

                            <h5 className='OR'>OR</h5>
                            <SocialMediaDiv>

                                <GoogleLogin
                                    onSuccess={async (credentialResponse) => {
                                        const token = credentialResponse.credential;
                                        const decoded = jwtDecode(token);
                                        console.log("Decoded Google user:", decoded);

                                        const res = await signin_google({ token });

                                        if (res?.token) {
                                            localStorage.setItem("token", res.token);
                                            localStorage.setItem("role", res.user.role);

                                            navigate("/applicant/dashboard/overview");

                                        } else {
                                            console.error("Google login failed!", res);
                                        }
                                    }}
                                    onError={() => {
                                        console.error("Google Login Failed");
                                    }}
                                />

                            </SocialMediaDiv>
                        </Form>
                    </form>


                </div>
            </FormDiv>
        </div>
    )
}

export default Login