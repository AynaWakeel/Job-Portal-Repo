import React, { useState } from 'react'
import { Form, FormDiv, SocialMediaDiv, TextDiv } from './style'
import google from '../../assets/icons/google-icon.svg'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import UseAuth from '../useAuth'

const ForgetPassword = () => {

    const {
        register,
        handleSubmit,
        formState : {errors},      
    } = useForm()

    const {forget_password} = UseAuth()

     const onSubmit = (data)=> {
        forget_password(data)
    }

    const navigate = useNavigate()
    const Register = () => {
        navigate('/auth/register')
    }

    const Login = () => {
        navigate('/auth/login')
    }

    const ResetPassword = () => {
        navigate('/auth/reset')
    }
    return (
        <div>

            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Forget Password</h1>
                    <TextDiv>
                        <span className='Text'>Go Back To </span>
                        <span><a onClick={Login} className='Ahref'>Signin</a></span>
                    </TextDiv>
                    <TextDiv>
                        <span className='Text'>Dont have an account? </span>
                        <span><a onClick={Register} className='Ahref'>Create Account</a></span>
                    </TextDiv>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <Form>
                        <div className='FormSpace'>
                            <input type="email" placeholder='Email' className='FormInput'
                            {...register("email",{required:"Enter your email"})}
                            />
                        </div>
                        <div className='FormError'>
                            {errors.email && <span>This field is req.</span>}
                        </div>

                        <button type='submit' 
                        // onClick={ResetPassword} 
                        className='FormBtn'>Reset password</button>

                        <h5 className='OR'>OR</h5>
                        <SocialMediaDiv>
                            <button className='MediaBtn'>
                                <img src={google} alt="icon" className='GoogleIcon' />
                                Sign in with Google</button>                         
                        </SocialMediaDiv>
                    </Form>
                    </form>

                </div>
            </FormDiv>
        </div>
    )
}

export default ForgetPassword