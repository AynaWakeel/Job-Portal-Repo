import React from 'react'
import { FormDiv, QrForm } from './style'
import ScanCode from '../../components/qrcode'

const TwoFactorAuth = () => {
    return (
        <div>

            <FormDiv>
                <div className='FormBox'>
                    <h1 className='FormH1'>Two Factor Authentication</h1>

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
                                <button type='submit' className='Btn'>Enter</button>

                            </div>
                        </div>

                    </QrForm>

                </div>
            </FormDiv>

        </div>
    )
}

export default TwoFactorAuth