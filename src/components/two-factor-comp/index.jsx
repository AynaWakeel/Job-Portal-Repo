import React, { useEffect, useState } from 'react'
import { Form, QrForm, SettingDiv } from './style'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as EyeClose } from '../../assets/icons/eye-close.svg'
import ScanCode from '../../components/qrcode'
import ReactSwitch from 'react-switch'
import { useForm } from 'react-hook-form'
import { showError } from '../../components/toasters'
import { useApplicant } from '../../shared/dashboard/applicant/useApplicant'

const TwoFactorComp = () => {
     const [isChecked, setIsChecked] = useState(false)
        const handleChange = nextChecked => {
            setIsChecked(nextChecked);
        }
   
    return (
        <div>
            <SettingDiv>
              
                <div className='Gapdiv '>
                    <h1 className='TopHeading'>Two Factor Authentication</h1>
                    {/* <span className='SubHeading'>You want to on two factor authentication?</span> */}
                    <div>
                        <ReactSwitch
                            checked={isChecked}
                            onChange={handleChange}
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
                                    <ScanCode />
                                </div>
                            </div>
                            <QrForm>
                                <div className='Formdiv'>
                                    <div className='flex-col'>
                                        {/* <label htmlFor='' className='Label'>Code</label> */}
                                        <input type="" placeholder='Code' className='qrInput' />
                                        <button type='submit' className='Btn'>Save</button>

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