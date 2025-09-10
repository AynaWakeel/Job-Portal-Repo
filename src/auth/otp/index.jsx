import React, { useState } from 'react'
import { Form, FormDiv, TextDiv } from './style'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

const Otp = () => {
    // const [otp,setOtp] = useState('')

    const navigate = useNavigate()
    const Login = () => {
        navigate('/auth/login')
    }

    const {
        register,
        handleSubmit,
        formState : {errors},
    } = useForm()

    const onSubmit = (data)=> console.log(data)

    return (
        <div>

            <FormDiv>
                <div>
                    <h1 className='FormH1'>Email Verification</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Form>
                        <div className='FormSpace'>
                            <input type="text" placeholder='Verification Code' className='FormInput'
                            {...register("VerificationCode",{required:"Enter your Verification Code"})}
                            // value={otp} onChange={(e)=>e.target.value}
                            />
                        </div>
                        <div className='FormError'>
                            {errors.VerificationCode && <span>This field is req.</span>}
                        </div>

                        <button type='submit' 
                        onClick={Login} 
                        className='FormBtn'>Verify My Account</button>

                        <TextDiv>
                            <span className='Text'>Didn’t recieve any code! </span>
                            <span><a className='Ahref'>Resend</a></span>
                        </TextDiv>
                    </Form>
                    </form>

                </div>
            </FormDiv>
        </div>
    )
}

export default Otp