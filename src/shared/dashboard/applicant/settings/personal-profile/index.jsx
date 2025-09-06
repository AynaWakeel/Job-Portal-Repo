import React, { useState } from 'react'
import { Dropdown, Form, ProfilePic, SettingDiv, UploadPdf } from './style'
import Upload from '../../../../../assets/icons/fi_upload-cloud.svg'
import { ReactComponent as File } from '../../../../../assets/icons/FileText.svg'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'

const ApplicantPersonalProfile = () => {

  //------------- simple dropdown ( experience )
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false)
  const ExperienceDropdownOpen = () => {
    setIsExperienceDropdownOpen(!isExperienceDropdownOpen)
    setIsEducationDropdownOpen(false)
  }

  const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false)
    const EducationDropdownOpen = () => {
      setIsEducationDropdownOpen(!isEducationDropdownOpen)
      setIsExperienceDropdownOpen(false)
    }

  return (
    <div>

      <SettingDiv>
        <form onSubmit="">

          <div>
            <h1 className='TopHeading'>Basic Information</h1>
          </div>
          <div className='Divide'>
            <div>
              <h3 className='SubHeading'>Profile Picture</h3>
              <ProfilePic>
                <label className='center'>
                  <div><img src={Upload} alt='upload' /></div>
                  <div>
                    <h5 className='TopHeading'>Browse photo <span>or drop here</span></h5>
                    <h6 className='Para'>A photo larger than 400 pixels work best. Max photo size 5 MB.</h6>
                    <input type="file" accept=".png" hidden />
                  </div>
                </label>
              </ProfilePic>

              <UploadPdf>
                <label className='center'>
                  <div><File className='IconColor' /></div>
                  <div>
                    <h5 className='Title'>Professional Resume</h5>
                    <h6 className='info'>3.5 MB</h6>
                    <input type="file" accept=".pdf" hidden />
                  </div>
                </label>
              </UploadPdf>

            </div>

            <Form>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Full Name</label>
                  <input type="text" placeholder='Full Name' className='FormInput' />
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Title</label>
                  <input type="text" placeholder='Title' className='FormInput' />
                </div>
              </div>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
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

                 <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Education</label>
                  <div className='SelectFlex simple-dropdown FormInput' onClick={EducationDropdownOpen}>
                    <input className='Input' placeholder='Education' />
                    {isEducationDropdownOpen ?
                      <Arrowup className='SelectColor' /> :
                      <Arrowdown className='SelectColor' />
                    }
                    {isEducationDropdownOpen &&
                      <Dropdown>
                        <ul className='options'>
                          <li>Diploma</li>
                          <li>Internship/A-Level</li>
                          <li>Bachelor's Degree</li>
                          <li>Master's Degree</li>
                          <li>MPhil</li>
                          <li>PhD</li>
                        </ul>
                      </Dropdown>
                    }
                  </div>
                </div>
              </div>

               <div className='FormSpace'>
                <label htmlFor='' className='Label'>Skill</label>
                <input type="text" placeholder='Skill..' className='FormInput' />
              </div>
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Personal Website</label>
                <input type="url" placeholder='Website' className='FormInput' />
              </div>

              <button type='submit' className='FormBtn'>Save Changes</button>
            </Form>

          </div>
        </form>
      </SettingDiv>

    </div>
  )
}

export default ApplicantPersonalProfile