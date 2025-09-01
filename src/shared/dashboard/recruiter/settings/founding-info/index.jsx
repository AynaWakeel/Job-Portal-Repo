import React, { useState } from 'react'
import { Dropdown, Form, SettingDiv } from './style'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'

const FoundingInfo = () => {
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
        <form onSubmit="">

          <Form>
            <div className='FormSpace FormInputDivide'>
               <div className='InputWidth'>
                <label htmlFor='' className='Label'>Organization Types</label>
                <div className='SelectFlex simple-dropdown FormInput' onClick={OrganizationDropdownOpen}>
                  <input className='Input' placeholder='Organization Types' />
                  {isOrganizationDropdownOpen ?
                    <Arrowup className='SelectColor' /> :
                    <Arrowdown className='SelectColor' />
                  }
                  {isOrganizationDropdownOpen &&
                    <Dropdown>
                      <ul className='options'>
                        <li>IT Company</li>
                        <li>Software House</li>
                        <li>E-commerce</li>
                        <li>Bank</li>
                        <li>University</li>
                        <li>Marketing Agency</li>
                        <li>Audit/Consulting Firm</li>
                      </ul>
                    </Dropdown>
                  }
                </div>
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Team Size</label>
                <input type='number' placeholder='150..' className='FormInput' />
              </div>

            </div>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Industry Types</label>
                <div className='SelectFlex simple-dropdown FormInput' onClick={IndustryDropdownOpen}>
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
                </div>
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Year of Establishment</label>
                <input type='date' className='FormInput' />
              </div>
            </div>
            <div className='FormSpace'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Company Website</label>
                <input type='url' placeholder='Website Url..' className='FormInput' />
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