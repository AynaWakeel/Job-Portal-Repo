import React, { useEffect, useState } from 'react'
import { FormDiv, QrForm } from './style'
import { useForm } from 'react-hook-form'
import { TwoFactor_Endpoints } from '../../lib/api/twoFactor_endpoints'
import { useAuthentication } from '../../shared/dashboard/useAuthentication'

const TwoFactorAuth = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const [qrCode, setQrCode] = useState()
    const { Verify } = useAuthentication()

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

     const onSubmit = async(data) => {
        const res = await  Verify(data)
        if(res?.data?.success){
            setQrCode("")
            console.log("verify", data);
        }
    }

    //  useEffect(() => {
    //         const fetchData = async () => {
    //             const res = await TwoFactor_Endpoints.get_authentication_status()
    //             if (res?.data?.is2FAEnabled) {
    //                 setIsEnabled(true)
    //                 console.log(res.data.is2FAEnabled, "2FA");
    
    //             }
    //         }
    //         fetchData()
    //     }, [])
    

    return (
        <div>

            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Two Factor Authentication</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <QrForm>
                            <div className='Formdiv'>
                                <div className='flex-col'>
                                    <label htmlFor='' className='Label'>Code</label>
                                    <input type="" placeholder='Code' className='qrInput'
                                        {...register("token", { required: 'Enter your code' })} />
                                    <div className='FormError'>
                                        {errors.code && <span>Code is required</span>}
                                    </div>

                                    <button type='submit' className='Btn'>Enter</button>

                                </div>
                            </div>

                        </QrForm>
                    </form>
                </div>
            </FormDiv>

        </div>
    )
}

export default TwoFactorAuth