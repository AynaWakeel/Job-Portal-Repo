import React, { useEffect, useState } from 'react'
import { Form, SettingDiv } from './style'
import { useForm } from 'react-hook-form'
import { useApplicant } from '../../useApplicant'
import { Applicant_Endpoints } from '../../../../../lib/api/applicant_endpoints'
import ChangePasswordComp from '../../../../../components/change-pasword'
import TwoFactorComp from '../../../../../components/two-factor-comp'
import { showError } from '../../../../../components/toasters'

const ApplicantAccountSetting = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const { profile_setting } = useApplicant()

    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const previousData = await Applicant_Endpoints.get_profile()
            if (previousData?.data) {
                reset(previousData.data);
                setHasData(true);
            } else {
                reset({
                    location: "",
                    phonenumber: "",
                    email: "",
                })
                setHasData(false);
            }
        }
        fetchData()
    }, [reset])

    const onSubmit = (data) => {

        if (data.phoneNumber) data.phoneNumber = Number(data.phoneNumber);

        if (isNaN(data.phoneNumber)) {
            showError("Phone Number must be a number");
            return;
        }
        profile_setting(data)
        console.log(data)
    }


    return (
        <div>
            <SettingDiv>
                <div>
                    <h1 className='TopHeading'>Contact Information</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Form>
                            <div className='FormSpace'>
                                <label htmlFor='location' className='Label'>Location</label>
                                <input type="text" placeholder='Location' className='FormInput'
                                    {...register("location", { required: "location is req." })} />
                            </div>
                            <div className='FormError'>
                                {errors.location && <p>Location is required.</p>}
                            </div>
                            <div className='FormSpace'>
                                <label htmlFor='phoneNumber' className='Label'>Phone Number</label>
                                <input type="tel" maxLength={12} placeholder='Number' className='FormInput'
                                    {...register("phoneNumber", { required: "phoneNumber is req." })} />
                            </div>
                            <div className='FormError'>
                                {errors.phoneNumber && <p>phoneNumber is required.</p>}
                            </div>
                            <div className='FormSpace'>
                                <label htmlFor='' className='Label'>Email</label>
                                <input type="email" placeholder='Email' className='FormInput'
                                    {...register("email", { required: "email is req." })} />
                            </div>
                            <div className='FormError'>
                                {errors.email && <p>Email is required.</p>}
                            </div>

                            <button type='submit' className='FormBtn'>Save Changes</button>
                        </Form>
                    </div>
                </form>

                <TwoFactorComp />


                <ChangePasswordComp />

            </SettingDiv>
        </div>
    )
}

export default ApplicantAccountSetting