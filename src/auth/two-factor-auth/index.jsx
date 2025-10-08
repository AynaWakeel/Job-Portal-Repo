import React, { useEffect, useState } from 'react'
import { Form, FormDiv, QrForm } from './style'
import { useForm } from 'react-hook-form'
import UseAuth from '../useAuth'
import { useLocation } from 'react-router'

const TwoFactorAuth = () => {
    const location = useLocation()
    const email = location.state.email
    const [isEnabled, setIsEnabled] = useState(false)
    const [userEmail, setUserEmail] = useState(email)

    const {login_with_2FA} = UseAuth()

    console.log("email from login:",email)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const res = await login_with_2FA(data)
        if (res?.data) {
            console.log("loin with 2Fa", res.data)
        }
    }


    return (
        <div>

            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Two Factor Authentication</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Form>
                            <div className='FormSpace'>
                                <input type="email" placeholder='Email' className='FormInput'
                                    {...register('email', { required: "Enter your email" })} 
                                    value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}
                                />
                            </div>
                            <div className='FormError'>
                                {errors.email && <p>Email is required.</p>}
                            </div>
                            <div className='FormSpace'>
                                <input type="number" placeholder='Code' className='FormInput'
                                    {...register("token", { required: 'Enter your code' })} />
                            </div>
                            <div className='FormError'>
                                {errors.code && <span>Code is required</span>}
                            </div>

                            <button type='submit' className='FormBtn'>Enter</button>

                        </Form>
                    </form>
                </div>
            </FormDiv>

        </div>
    )
}

export default TwoFactorAuth