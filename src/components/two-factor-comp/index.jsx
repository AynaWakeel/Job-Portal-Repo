import React, { useEffect, useState } from 'react'
import { Form, QrForm, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import ReactSwitch from 'react-switch'
import { useForm } from 'react-hook-form'
import { showError } from '../../components/toasters'
import { useApplicant } from '../../shared/dashboard/applicant/useApplicant'
import { useAuthentication } from '../../shared/dashboard/useAuthentication'
// import QRCode from 'react-qr-code'

const TwoFactorComp = () => {
    const {
        register,
        handleSubmit
    } = useForm()

    const { Enable, Verify, Disable } = useAuthentication()

    const [isChecked, setIsChecked] = useState(false)
    const [qrCode, setQrCode] = useState()
    // const handleChange = nextChecked => {
    //     setIsChecked(nextChecked)

    //     if(nextChecked){
    //         handleAdd({})
    //     }else{
    //         handleRemove({})
    //     }
    // }

    const handleAdd = async () => {
        const res = await Enable()
        console.log("enable:", res);

        if (res?.qrCode) {
            setQrCode(res.qrCode)
            console.log("enable", res.qrCode)
        }
        setIsChecked(true)
    }

    const onSubmit = (data) => {
        Verify(data)
        console.log("verify", data);
    }

    const handleRemove = async () => {
        await Disable()
        setIsChecked(false)
        setQrCode("")
        console.log("disable");
    }

    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         await 
    //     }
    // },[])

    return (
        <div>
            <SettingDiv>

                <div className='Gapdiv '>
                    <h1 className='TopHeading'>Two Factor Authentication</h1>
                    <div>
                        <ReactSwitch
                            checked={isChecked}
                            onChange={(nextChecked) => {
                                if (nextChecked) {
                                    handleAdd()
                                } else {
                                    handleRemove()
                                }
                            }}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={24}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={22}
                            width={48}
                        />
                    </div>

                    {isChecked ?

                        (<div>
                            <div className='middiv'>
                                <div className='QRBox'>
                                   

                                    <img
                                        src={qrCode}
                                        alt="QR Code"
                                         style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                        // style={{ width: 280, height: 280 }}
                                    />
                                </div>
                            </div>
                            <QrForm>
                                <div className='Formdiv'>
                                    <div className='flex-col'>
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <input type="number" placeholder='Code' className='qrInput' {...register("token")} />
                                            <button type='submit' className='Btn'>Save</button>

                                        </form>

                                    </div>
                                </div>

                            </QrForm>
                        </div>)

                        :

                        <span className='SubHeading'>You want to on two factor authentication?</span>

                    }

                </div>

            </SettingDiv>
        </div>
    )
}

export default TwoFactorComp