import React, { useEffect, useState } from 'react'
import { Dropdown, Form, SettingDiv } from './style'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'
import { useForm } from 'react-hook-form'
import { useRecruiter } from '../../useRecruiter'
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints'
import CustomSelect from '../../../../../components/custome-select'

const FoundingInfo = () => {
  const orgOptions = [
    "Business / For-Profit Company",
    "Nonprofit / Charity",
    "Government / Public Sector",
    "Social Enterprise / B-Corporation",
    "Educational Institution",
    "Partnership",
    "Sole Proprietorship",
    "Limited Liability Company (LLC)",
    "Cooperative",
    "State-Owned Enterprise",
  ]

  const industryOptions = [
    "Information Technology",
    "Finance & Banking",
    "Engineering & Manufacturing",
    "Marketing & Advertising",
    "Retail & E-commerce",
    "Construction & Real Estate",
    "Healthcare & Medical",
  ]

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm()

  const { company_profile } = useRecruiter()
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const previousData = await Recruiter_Endpoints.get_company_profile();
      if (previousData) {
        reset(previousData);
        setHasData(true);
      } else {
        reset({
          organizationType: "",
          teamSize: "",
          industryTypes: "",
          yearOfEstablishment: "",
          companyWebsite: "",
        });
        setHasData(false);
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = (data) => {
    company_profile(data)
    console.log(data)
  }

  return (
    <div>
      <SettingDiv>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Form>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Organization Types</label>
                <CustomSelect
                  name="organizationType"
                  control={control}
                  rules={{ required: "Enter your organizationType" }}
                  placeholder="Organization Types"
                  options={orgOptions}
                />

                <div className='FormError'>
                  {errors.organizationType && <p>Organization Type id required.</p>}
                </div>
              </div>

              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Team Size</label>
                <input type='text' placeholder='150..' className='FormInput'
                  {...register("teamSize", { required: "teamSize is req." })} />
              </div>
            </div>
            <div className='FormError'>
              {errors.teamSize && <p>Team Size is required.</p>}
            </div>

            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Industry Types</label>
                   <CustomSelect
                  name="industryTypes"
                  control={control}
                  rules={{ required: "Enter your Industry Types" }}
                  placeholder="Industry Types"
                  options={industryOptions}
                />
                <div className='FormError'>
                  {errors.industryTypes && <p>Industry Type id required.</p>}
                </div>
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Year of Establishment</label>
                <input type='text' className='FormInput' placeholder='2023'
                  {...register("yearOfEstablishment", { required: "yearOfEstablishment is req." })} />
              </div>
            </div>
            <div className='FormError'>
              {errors.yearOfEstablishment && <p>Year of Establishment is required.</p>}
            </div>

            <div className='FormSpace'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Company Website</label>
                <input type='url' placeholder='Website Url..' className='FormInput'
                  {...register("companyWebsite", { required: "website url is req." })} />
              </div>
              <div className='FormError'>
                {errors.companyWebsite && <p>Website url is required.</p>}
              </div>
            </div>

            <div className='FormSpace'>
              <button type='submit' className='FormBtn'>Save Changes</button>
            </div>
          </Form>

        </form>
      </SettingDiv>
    </div>
  )
}

export default FoundingInfo