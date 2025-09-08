import React, { useState } from 'react'
import { Checkbox, ForgetDiv, Form, FormDiv, SocialMediaDiv, TextDiv } from './style'
import google from '../../assets/icons/google-icon.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
// import axios from 'axios'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const Register = () => {
        navigate('/auth/register')
    }
    const ForgetPassword = () => {
        navigate('/auth/forget')
    }
    const TwoFactor = () =>{
        navigate('/auth/two-factor-authentication')
    }

    const [isVisible, setIsVisible] = useState(false)

    const Visibility = () => {
        setIsVisible(!isVisible)
    }

    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // })

    // const handleChange = (e) =>{
    //     setFormData({
    //         ...formData,
    //         [e.target.name]:e.target.value
    //     })
    // }

    // const handleSubmit = async(e) =>{
    //     e.preventDefault()

    //     try{
    //         const res = await axios('',formData)
    //         console.log('Login Successfull',res.data)
    //         alert('Login success')
    //     }catch(error){
    //         console.log('Login error',error)
    //     }
    // }

    return (
        <div>

            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Sign In</h1>
                    <TextDiv>
                        <span className='Text'>Dont have an account? </span>
                        <span><a onClick={Register} className='Ahref'>Create Account</a></span>
                    </TextDiv>
                    <Form onSubmit={handleSubmit(
                        (data) => {
                            console.log(data);
                            navigate('/');
                        },
                        (errors) => {
                            console.log(errors);
                        }
                    )}>
                        <div className='FormSpace'>
                            <input type="email" placeholder='Email' className='FormInput' {...register('email', { required: true })} />
                            {errors.email && <p>Email is required.</p>}
                        </div>
                        <div className='FormSpace'>
                            <div className='FormPassword'>
                                <input type={isVisible ? "text" : "password"} placeholder='Password' className='FormInput' {...register('password', { required: true })} />
                                <div onClick={Visibility}>
                                    {isVisible ?
                                        <EyeIcon className='eyeimg' /> :
                                        <EyeClose className='eyeimg' />
                                    }
                                </div>
                                {errors.password && <p>Password id required.</p>}
                            </div>
                        </div>
                        <ForgetDiv>
                            <span className='CheckBoxSpan'>
                                <Checkbox type="checkbox" />Remember Me
                            </span>
                            <span><a onClick={ForgetPassword} className='ForgetText'>Forgot Password?</a></span>
                        </ForgetDiv>
                        <button type='submit' className='FormBtn' onClick={TwoFactor}>Sign In</button>

                        <h5 className='OR'>OR</h5>
                        <SocialMediaDiv>
                            <button className='MediaBtn'>
                                <img src={google} alt="icon" className='GoogleIcon' />
                                Sign in with Google</button>
                          
                        </SocialMediaDiv>
                    </Form>

                </div>
            </FormDiv>
        </div>
    )
}

export default Login