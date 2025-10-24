import React, { useEffect, useState } from 'react'
import { Form, FormDiv, TextDiv } from './style'
import { useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import UseAuth from '../useAuth'
import { showError } from '../../components/toasters'

const Otp = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    
    const [timer, setTimer] = useState(60);
    const [isActive, setIsActive] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { verify_otp, send_otp } = UseAuth()

    const email = state?.email
    const type = state?.type

    useEffect(() => {
        const sendOtpCode = async () => {

            if (email && type === "email_verification") {
                await send_otp({ email, type: "email_verification" })

                console.log("OTP automatically sent to:", email);
            }
        }

        sendOtpCode()
    }, [email, type]);

    const onSubmit = async (data) => {
        const otpCode = data.otpCode
        if (!email) {
            showError("email missing")
        }
        const res = await verify_otp({ email, otpCode, type })
        if (!res) return

        const tempToken = res?.response?.tempToken

        if (type === "password_reset" && tempToken) {
            localStorage.setItem("tempToken", tempToken)
            navigate('/auth/reset', { state: { email, tempToken } })

        } else if (type === "email_verification" && res?.success) {
            navigate('/auth/login')
        } else {
            showError(res?.message || "token not found")
            console.log("token not found");
        }
    }


    useEffect(() => {
        let interval;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timer]);

    const ResendOtp = async () => {
        setTimer(60)
        const res = await send_otp({ email, type })
        console.log(res)
    }

    return (
        <div>

            <FormDiv>
                <div>
                    <h1 className='FormH1'>Email Verification</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form>
                            <div className='FormSpace'>
                                <input type="text" placeholder='Verification Code' className='FormInput'
                                    {...register("otpCode", { required: "Enter your Verification Code" })}
                                />
                            </div>
                            <div className='FormError'>
                                {errors.otpCode && <span>This field is req.</span>}
                            </div>

                            <button type='submit'
                                className='FormBtn'>Verify My Account</button>

                            <TextDiv>
                                <span className='Text'>Didn’t recieve any code! </span>
                                {isActive ?
                                
                                <span><a className='Ahref' onClick={ResendOtp}>Resend in {timer}</a></span>
                                :
                                <span><a className='Ahref' onClick={ResendOtp}>Resend</a></span>

                                }
                            </TextDiv>
                        </Form>
                    </form>

                </div>
            </FormDiv>
        </div>
    )
}

export default Otp