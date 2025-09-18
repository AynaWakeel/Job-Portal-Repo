import React, { useState } from 'react'
import { Dropdown, Form, SettingDiv } from './style'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'
import { useForm } from 'react-hook-form'
import { useRecruiter } from '../../useRecruiter'

const FoundingInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { company_profile } = useRecruiter()

  const onSubmit = (data) => {
    company_profile(data)
    console.log(data)
  }

  //------------- simple dropdown ( experience )
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false)
  const IndustryDropdownOpen = () => {
    setIsIndustryDropdownOpen(!isIndustryDropdownOpen)
    setIsOrganizationDropdownOpen(false)
  }
  //------------- simple dropdown ( organization )
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false)
  const OrganizationDropdownOpen = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen)
    setIsIndustryDropdownOpen(false)
  }
  return (
    <div>
      <SettingDiv>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Form>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Organization Types</label>
                {/* <div className='SelectFlex simple-dropdown FormInput' onClick={OrganizationDropdownOpen}>
                  <input className='Input' placeholder='Organization Types' />
                  {isOrganizationDropdownOpen ?
                    <Arrowup className='SelectColor' /> :
                    <Arrowdown className='SelectColor' />
                  }
                  {isOrganizationDropdownOpen &&
                    <Dropdown>
                      <ul className='options'>
                        <li>Business / For-Profit Company</li>
                        <li>Nonprofit / Charity</li>
                        <li>Government / Public Sector</li>
                        <li>Social Enterprise / B-Corporation</li>
                        <li>Educational Institution</li>
                        <li>Partnership</li>
                        <li>Sole Proprietorship</li>
                        <li>Limited Liability Company (LLC)</li>
                        <li>Cooperative</li>
                        <li>State-Owned Enterprise</li>
                      </ul>
                    </Dropdown>
                  }
                </div> */}
                <select className='SelectFlex simple-dropdown FormInput'
                  {...register('organizationType', { required: "Enter your organizationType" })} >
                  <option value="Business / For-Profit Company">Business / For-Profit Company</option>
                  <option value="Nonprofit / Charity">Nonprofit / Charity</option>
                  <option value="Government / Public Sector">Government / Public Sector</option>
                  <option value="Social Enterprise / B-Corporation">Social Enterprise / B-Corporation</option>
                  <option value="Educational Institution">Educational Institution</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="Limited Liability Company (LLC)">Limited Liability Company (LLC)</option>
                  <option value="Cooperative">Cooperative</option>
                  <option value="State-Owned Enterprise">State-Owned Enterprise</option>
                </select>
                <div className='FormError'>
                  {errors.organizationType && <p>Organization Type id required.</p>}
                </div>
              </div>

              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Team Size</label>
                <input type='number' placeholder='150..' className='FormInput'
                  {...register("teamSize", { required: "teamSize is req." })} />
              </div>
            </div>
            <div className='FormError'>
              {errors.teamSize && <p>Team Size is required.</p>}
            </div>

            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Industry Types</label>
                {/* <div className='SelectFlex simple-dropdown FormInput' onClick={IndustryDropdownOpen}>
                  <input className='Input' placeholder='Industry Types' />
                  {isIndustryDropdownOpen ?
                    <Arrowup className='SelectColor' /> :
                    <Arrowdown className='SelectColor' />
                  }
                  {isIndustryDropdownOpen &&
                    <Dropdown>
                      <ul className='options'>
                        <li>Information Technology</li>
                        <li>Finance & Banking</li>
                        <li>Engineering & Manufacturing</li>
                        <li>Marketing & Advertising</li>
                        <li>Retail & E-commerce</li>
                        <li>Construction & Real Estate</li>
                        <li>Healthcare & Medical</li>
                      </ul>
                    </Dropdown>
                  }
                </div> */}

                <select className='SelectFlex simple-dropdown FormInput'
                  {...register('industryTypes', { required: "Enter your industryTypes" })} >

                  <option value="Information Technology">Information Technology</option>
                  <option value="Finance & Banking">Finance & Banking</option>
                  <option value="Engineering & Manufacturing">Engineering & Manufacturing</option>
                  <option value="Marketing & Advertising">Marketing & Advertising</option>
                  <option value="Retail & E-commerce">Retail & E-commerce</option>
                  <option value="Construction & Real Estate">Construction & Real Estate</option>
                  <option value="Healthcare & Medical">Healthcare & Medical</option>
                </select>
                <div className='FormError'>
                  {errors.industryTypes && <p>Industry Type id required.</p>}
                </div>
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Year of Establishment</label>
                <input type='text' className='FormInput'
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
                  {...register("website", { required: "website url is req." })} />
              </div>
              <div className='FormError'>
                {errors.website && <p>Website url is required.</p>}
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