import React, { useState } from 'react'
import { Form, FormDiv, TextDiv } from './style'
import { useNavigate } from 'react-router'

const Otp = () => {
    // const [otp,setOtp] = useState('')

    const navigate = useNavigate()
    const Login = () => {
        navigate('/auth/login')
    }

    return (
        <div>

            <FormDiv>
                <div>
                    <h1 className='FormH1'>Email Verification</h1>
                    <Form>
                        <div className='FormSpace'>
                            <input type="text" placeholder='Verification Code' className='FormInput'
                            // value={otp} onChange={(e)=>e.target.value}
                            />
                        </div>

                        <button type='submit' onClick={Login} className='FormBtn'>Verify My Account</button>

                        <TextDiv>
                            <span className='Text'>Didn’t recieve any code! </span>
                            <span><a className='Ahref'>Resend</a></span>
                        </TextDiv>
                    </Form>

                </div>
            </FormDiv>
        </div>
    )
}

export default Otp