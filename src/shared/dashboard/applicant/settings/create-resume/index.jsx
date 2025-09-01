import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Checkbox, Dropdown, ForgetDiv, Form, SettingDiv } from './style'
import Resume from '../../../../../components/resume';
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'

const ApplicantCreateResume = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const Modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }

  const isOpen = () => {
    setIsResumeOpen(true)
  }

  //------------- simple dropdown ( experience )
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false)
  const ExperienceDropdownOpen = () => {
    setIsExperienceDropdownOpen(!isExperienceDropdownOpen)
  }




  return (
    <div>

      <SettingDiv>
        {/* ------------------------ CREATE RESUME FORM ------------------------------- */}
        <form onSubmit="">
          <div>
            <h1 className='TopHeading'>Personal Information</h1>
          </div>
          <Form>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth FormPassword'>
                <label htmlFor='' className='Label'>Full Name</label>
                <input type='text' placeholder='Full Name' className='FormInput' />
              </div>
              <div className='InputWidth FormPassword'>
                <label htmlFor='' className='Label'>Title</label>
                <input type='text' placeholder='Title' className='FormInput' />
              </div>
            </div>

            <ForgetDiv>
              <span className='CheckBoxSpan'>
                <div className='FormGapDivide'>
                  <Checkbox type="radio" id='male' name='gender' value='' />
                  <label htmlFor='male'>Male</label>
                </div>
                <div className='FormGapDivide'>
                  <Checkbox type="radio" id='female' name='gender' value='' />
                  <label htmlFor='female'>Female</label>
                </div>
              </span>
            </ForgetDiv>
          </Form>

          <div className='spacetop'>
            <h1 className='TopHeading'>Education</h1>
            <Form>
              <div className='FormSpace FormInputDivide'>
                 <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Degree</label>
                  <input type='text' placeholder='Degree' className='FormInput' />
                </div>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Institute</label>
                  <input type='text' placeholder='Institute' className='FormInput' />
                </div>
              </div>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Experience</label>
                  <div className='SelectFlex simple-dropdown FormInput' onClick={ExperienceDropdownOpen}>
                    <input className='Input' placeholder='Experience' />
                    {isExperienceDropdownOpen ?
                      <Arrowup className='SelectColor' /> :
                      <Arrowdown className='SelectColor' />
                    }
                    {isExperienceDropdownOpen &&
                      <Dropdown>
                        <ul className='options'>
                          <li>Freshers</li>
                          <li>1 - 2 Years</li>
                          <li>2 - 4 Years</li>
                          <li>4 - 6 Years</li>
                          <li>6 - 8 Years</li>
                          <li>8 - 10 Years</li>
                          <li>10 - 15 Years</li>
                        </ul>
                      </Dropdown>
                    }
                  </div>
                </div>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Projects</label>
                  <input type='text' placeholder='Projects' className='FormInput' />
                </div>
              </div>
            </Form>
          </div>

          <div className='spacetop'>
            <h1 className='TopHeading'>Contact Information</h1>
            <Form>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Location</label>
                  <input type='text' placeholder='Location' className='FormInput' />
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Phone Number</label>
                  <input type='tel' placeholder='Number' className='FormInput' />
                </div>
              </div>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Email</label>
                  <input type='email' placeholder='Email' className='FormInput' />
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Personal Website</label>
                  <input type='url' placeholder='website' className='FormInput' />
                </div>
              </div>

            </Form>
          </div>
          {/* -------------- react quill ------------ */}
          <div className='spacetop'>
            <h1 className='TopHeading'>Bioraphy</h1>
            <ReactQuill theme="snow" modules={Modules} className='Quillbar' />
          </div>

          <Form>
            <div className='FormGapDivide'>
              <button type='submit' className='FormBtn'>Save Changes</button>
              <button type='button' onClick={isOpen} className='FormBtn'>View Resume</button>
              {isResumeOpen &&
                <Resume onClose={() => setIsResumeOpen(false)} />
              }
            </div>
          </Form>


        </form>
      </SettingDiv>
    </div>
  )
}

export default ApplicantCreateResume