import React, { useEffect, useState } from 'react'
import { Dropdown, Form, SettingDiv } from './style'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'
import { Controller, useForm } from 'react-hook-form'
import { useRecruiter } from '../../useRecruiter'
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints'
import CustomSelect from '../../../../../components/custome-select'
import Select from 'react-select';
import { showError } from '../../../../../components/toasters'

const FoundingInfo = () => {

  const [industryOptions, setIndustryOptions] = useState([])
  const [selected, setSelected] = useState(null)
  const { company_profile } = useRecruiter()
  const [hasData, setHasData] = useState(false)

  const orgOptions = [
    { label: "Business / For-Profit Company" },
    { label: "Nonprofit / Charity" },
    { label: "Government / Public Sector" },
    { label: "Social Enterprise / B-Corporation" },
    { label: "Educational Institution" },
    { label: "Partnership" },
    { label: "Sole Proprietorship" },
    { label: "Limited Liability Company (LLC)" },
    { label: "Cooperative" },
    { label: "State-Owned Enterprise" },
  ]

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm()


  useEffect(() => {
    const fetchData = async () => {

      try {

        const res = await Recruiter_Endpoints.get_industry()
        if (res?.data?.industries) {
          const options = res.data.industries.map((item) => ({
            value: item.id,
            label: item.name,
          }))
          setIndustryOptions(options)
        }

        const previousData = await Recruiter_Endpoints.get_company_profile();
        if (previousData?.data) {
          reset(previousData.data);
          setSelected(previousData.data.organizationType);
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

      } catch (error) {
        console.error(error);
      }

    };
    fetchData();
  }, [reset]);

  const onSubmit = (data) => {

    if (data.teamSize) {
      data.teamSize = data.teamSize.trim();

      const teamSizePattern = /^\d+(-\d+)?$/;

      if (!teamSizePattern.test(data.teamSize)) {
        showError("Team Size must be a number or 10-20");
        return;
      }
    }

    if (data.yearOfEstablishment) data.yearOfEstablishment = Number(data.yearOfEstablishment);
    if (isNaN(data.yearOfEstablishment)) {
      showError("Year Must be a number");
      return;
    }

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
                
                <Controller
                  name="organizationType"
                  control={control}
                  rules={{ required: "Organization type is required" }}
                  render={({ field }) => (
                    <Select
                      className="inputSelect select"
                      classNamePrefix="select"
                      options={orgOptions}
                      value={orgOptions.find(opt => opt.label === field.value) || null}
                      onChange={(val) => field.onChange(val.label)}
                      placeholder="Select Organization"
                    />
                  )}
                />


                <div className='FormError'>
                  {errors.organizationType && <p>Organization Type id required.</p>}
                </div>
              </div>

              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Team Size</label>
                <input type='text' placeholder='150..' className='FormInput'
                  {...register("teamSize", { required: "teamSize is req." })}

                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9-]/g, "");

                    const parts = e.target.value.split("-");
                    if (parts.length > 2) {
                      e.target.value = parts[0] + "-" + parts[1];
                    }
                  }}
                />
              </div>
            </div>
            <div className='FormError'>
              {errors.teamSize && <p>Team Size is required.</p>}
            </div>

            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Industry Types</label>
                <Controller
                  name="industryTypes"
                  control={control}
                  rules={{ required: "Industry is required" }}
                  render={({ field }) => (
                    <Select
                      className="inputSelect select"
                      classNamePrefix="select"
                      options={industryOptions}
                      value={industryOptions.find(opt => opt.value === field.value) || null}
                      onChange={(val) => field.onChange(val.value)}
                      placeholder="Industry Types"
                    />
                  )}
                />

                <div className='FormError'>
                  {errors.industryTypes && <p>Industry Type id required.</p>}
                </div>
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Year of Establishment</label>
                <input type='text' className='FormInput' placeholder='2023'
                  {...register("yearOfEstablishment", { required: "yearOfEstablishment is req." })}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9-]/g, "");

                  }} />
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
              <button type='submit' className='FormBtn'>
                {hasData ?
                  "Update" :
                  "Save"
                }
              </button>
            </div>
          </Form>

        </form>
      </SettingDiv>
    </div>
  )
}

export default FoundingInfo