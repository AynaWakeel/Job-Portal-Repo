import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Dropdown, Form, ProfilePic, SettingDiv, UploadPdf } from './style'
import Upload from '../../../../../assets/icons/fi_upload-cloud.svg'
import { ReactComponent as File } from '../../../../../assets/icons/FileText.svg'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'
import { Controller, useForm } from 'react-hook-form';
import { useApplicant } from '../../useApplicant';

const ApplicantPersonalProfile = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { profile_setting, profile_pic, upload_resume} = useApplicant()

  const onSubmit = (data) => {
    profile_setting(data)
    console.log(data, 'here is form data');

  }
  const handleProfilePic = (e) =>{
    const file = e.target.files[0]
    if(file){
      const picData = new FormData()
      picData.append("profilepic", file)
      profile_pic(picData);
    }
  }
  const handleUploadResume = (e)=>{
    const file = e.target.files[0]
    if(file){
      const resumeData = new FormData()
      resumeData.append("resume", file)
      upload_resume(resumeData)
      console.log("pdf")
    }
  }

  const Modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }
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

        <div>
          <h1 className='TopHeading'>Basic Information</h1>
        </div>
        <div className='Divide'>
          <div>
            <h3 className='SubHeading'>Profile Picture</h3>
            <ProfilePic>
              <label className='center' >
                <div><img src={Upload} alt='upload' /></div>
                <div>
                  <h5 className='TopHeading'>Browse photo <span>or drop here</span></h5>
                  <h6 className='Para'>A photo larger than 400 pixels work best. Max photo size 5 MB.</h6>
                  <input type="file" accept=".png" hidden
                  onChange={handleProfilePic}/>
                </div>
              </label>
            </ProfilePic>
            {/* <div className='FormError'>
              {errors.profilepic && <p>Image id required.</p>}
            </div> */}

            <UploadPdf>
              <label className='center'>
                <div><File className='IconColor' /></div>
                <div>
                  <h5 className='Title'>Professional Resume</h5>
                  <h6 className='info'>3.5 MB</h6>
                  <input type="file" accept=".pdf" hidden onChange={handleUploadResume}/>
                </div>
              </label>
            </UploadPdf>
            {/* <div className='FormError'>
              {errors.resume && <p>Image id required.</p>}
            </div> */}

          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Full Name</label>
                  <input type="text" placeholder='Full Name' className='FormInput'
                    {...register('fullName', { required: "Enter your Full name." })} />
                </div>
                <div className='FormError'>
                  {errors.fullName && <p>fullName id required.</p>}
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Title</label>
                  <input type="text" placeholder='Title' className='FormInput'
                    {...register('title', { required: "Enter your user title." })} />
                </div>
                <div className='FormError'>
                  {errors.title && <p>title id required.</p>}
                </div>
              </div>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='experience' className='Label'>Experience</label>
                  <div
                  // onClick={ExperienceDropdownOpen}
                  >
                    {/* <input className='Input' placeholder='Experience' 
                    {...register('experience', { required: "Enter your Experience" })}/>
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
                    } */}
                    <select className='SelectFlex simple-dropdown FormInput'
                      {...register('experience', { required: "Enter your Experience" })} >
                      <option value="Freshers">Freshers</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="2 - 4 Years">2 - 4 Years</option>
                      <option value="4 - 6 Years">4 - 6 Years</option>
                      <option value="6 - 8 Years">6 - 8 Years</option>
                      <option value="8 - 10 Years">8 - 10 Years</option>
                      <option value="10 - 15 Years">10 - 15 Years</option>
                    </select>
                    <div className='FormError'>
                      {errors.experience && <p>experience id required.</p>}
                    </div>
                  </div>
                </div>

                <div className='InputWidth'>
                  <label htmlFor='education' className='Label'>Education</label>
                  {/* <div className='SelectFlex simple-dropdown FormInput' 
                  onClick={EducationDropdownOpen}>
                    <input className='Input' placeholder='Education' 
                    {...register('education', { required: "Enter your Education." })}/>
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
                          <li>MPhil</li>
                        </ul>
                      </Dropdown>
                    } */}
                  <select className='SelectFlex simple-dropdown FormInput'
                    {...register('education', { required: "Enter your education" })} >
                    <option value="Diploma">Diploma</option>
                    <option value="Internship/A-Level">Internship/A-Level</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="MPhil">MPhil</option>
                    <option value="MPhil">MPhil</option>
                  </select>
                  <div className='FormError'>
                    {errors.experience && <p>experience id required.</p>}
                  </div>
                  {/* </div> */}
                </div>
              </div>


              <div className='FormSpace'>
                <label htmlFor='personalwebsite' className='Label'>Personal Website</label>
                <input type="url" placeholder='Website' className='FormInput'
                  {...register('personalwebsite', { required: "Enter your Website." })} />
              </div>
              <div className='FormError'>
                {errors.personalwebsite && <p>personalwebsite id required.</p>}
              </div>

              <div className='FormSpace'>
                <label htmlFor='bioGraphy' className='Label'>Biography</label>
                <Controller
                  name='bioGraphy'
                  control={control}
                  rules={{ required: "Enter your bio." }}
                  render={({ field, fieldState }) => (
                    <>
                      <ReactQuill theme="snow" modules={Modules} className='Quillbar' placeholder='Write your biography....'
                        value={field.value} onChange={field.onChange}
                      />

                      <div className='FormError'>
                        {fieldState.error && <p>bioGraphy id required.</p>}
                      </div>
                    </>
                  )}

                />

              </div>

              <button type='submit' className='FormBtn'>Save Changes</button>
            </Form>
          </form>

        </div>


      </SettingDiv>

    </div>
  )
}

export default ApplicantPersonalProfile