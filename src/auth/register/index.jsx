import React, { useState } from 'react'
import { Checkbox, ForgetDiv, Form, FormDiv, SocialMediaDiv, TextDiv } from './style'
import google from '../../assets/icons/google-icon.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const password = watch("password")

    const navigate = useNavigate()

    const Login = () => {
        navigate('/auth/login')
    }

    const Otp = () => {
        navigate('/auth/otp')
    }
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const PasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

    const ConfirmationVisibility = () => {
        setIsConfirmationVisible(!isConfirmationVisible)
    }

    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     role: ''
    // })

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     }
    //     )
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (formData.password !== formData.confirmPassword) {
    //         alert('password do not match')
    //         return;
    //     }

    //     const dataToSend = {
    //         fullName: formData.fullName,
    //         username: formData.username,
    //         email: formData.email,
    //         password: formData.password,
    //         role: formData.role
    //     }

    //     try {
    //         const res = await axios.post("", dataToSend);
    //         console.log("Success!", res.data);
    //         alert("Registered successfully!");
    //     } catch (error) {
    //         console.log('error message', error);
    //         alert("Registration error");
    //     }
    // }
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
                                        {...register('FullName', { required: "Enter your Full Name" })}
                                    // value={formData.fullName} onChange={handleChange} 
                                    />
                                </div>

                                <div>
                                    <input type="text" placeholder='Username' className='FormInput'
                                        {...register('Username', { required: "Enter your Username" })}
                                    // value={formData.username} onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className='FormInputDivide'>

                                <div className='FormError'>
                                    {errors.Username && <p>Username id required.</p>}
                                </div>
                                <div className='FormError'>
                                    {errors.FullName && <p>Full Name id required.</p>}
                                </div>
                            </div>

                            <div className='FormSpace'>
                                <input type="email" placeholder='Email' className='FormInput'
                                    {...register('email', { required: "Enter your email" })}
                                // value={formData.email} onChange={handleChange} 
                                />
                            </div>
                            <div className='FormError'>
                                {errors.email && <p>Email is required.</p>}
                            </div>

                            <div className='FormSpace'>
                                <div className='FormPassword'>
                                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='FormInput'
                                        {...register('password', { required: "Enter your password" })}
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
                                {errors.password && <p>Password id required.</p>}
                            </div>

                            <div className='FormSpace'>
                                <div className='FormPassword'>
                                    <input type={isConfirmationVisible ? "text" : "password"} placeholder='Confirm Password' className='FormInput '
                                        {...register('confirmPassword', { required: "Enter your confirm Password",
                                           validate: (value) => {
                                              if(!value)
                                                return "Confirm Password id required." 
                                              if(value !== password)
                                               return "Password do not match" 
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
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                            </div>

                            <ForgetDiv>
                                <span className='CheckBoxSpan'>
                                    <div className='FormInputDivide'>
                                        <Checkbox type="radio" id='recruiter' name='role'
                                        // value='recruiter' checked={formData.role === 'recruiter'} onChange={handleChange} 
                                        />
                                        <label htmlFor='recruiter'>Recruiter</label>
                                    </div>
                                    <div className='FormInputDivide'>
                                        <Checkbox type="radio" id='applicant' name='role'
                                        // value='applicant' checked={formData.role === 'applicant'} onChange={handleChange} 
                                        />
                                        <label htmlFor='applicant'>Applicant</label>
                                    </div>
                                </span>
                            </ForgetDiv>
                            <button type='submit'
                                // onClick={Otp} 
                                className='FormBtn'>Register</button>

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

export default Register