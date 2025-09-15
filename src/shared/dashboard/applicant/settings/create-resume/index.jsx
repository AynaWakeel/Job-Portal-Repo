import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Checkbox, Dropdown, ForgetDiv, Form, SettingDiv } from './style'
import Resume from '../../../../../components/resume';
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'
import { useApplicant } from '../../useApplicant';
import { Controller, useForm } from 'react-hook-form';
import { Applicant_Endpoints } from '../../../../../lib/api/applicant_endpoints';

const ApplicantCreateResume = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors }
  } = useForm()
  const { create_resume, update_applicant_resume } = useApplicant()
  
  const [hasResume, setHasResume] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    const previousData = await Applicant_Endpoints.get_resume();
    if (previousData) {
      reset(previousData);
      setHasResume(true);
    } else {
      reset({   
        fullname: "",
        title: "",
        gender: "",
        degree: "",
        skills: "",
        institute: "",
        experience: "",
        projects: "",
        location: "",
        phonenumber: "",
        email: "",
        personalwebsite: "",
        biography: ""
      });
      setHasResume(false);
    }
  };
  fetchData();
}, [reset]);

  const onSubmit = (data) => {
    if (data.resume?.[0]) {
      const resumeData = new FormData()
      resumeData.append("resume", data.resume[0])
      update_applicant_resume(resumeData)

    }
    create_resume(data)
    console.log(data)
  }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className='TopHeading'>Personal Information</h1>
          </div>
          <Form>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth FormPassword'>
                <label htmlFor='fullname' className='Label'>Full Name</label>
                <input type='text' placeholder='Full Name' className='FormInput'
                  {...register('fullname', { required: "Enter your Full name." })} />
              </div>
              <div className='FormError'>
                {errors.fullname && <p>fullname id required.</p>}
              </div>
              <div className='InputWidth FormPassword'>
                <label htmlFor='title' className='Label'>Title</label>
                <input type='text' placeholder='Title' className='FormInput'
                  {...register('title', { required: "Enter your user title." })} />
              </div>
              <div className='FormError'>
                {errors.title && <p>title id required.</p>}
              </div>
            </div>

            <ForgetDiv>
              <span className='CheckBoxSpan'>
                <div className='FormGapDivide'>
                  <Checkbox type="radio" id='male' name='gender' value='male'
                    {...register('gender', { required: "Enter your gender" })} />
                  <label htmlFor='male'>Male</label>
                </div>
                <div className='FormGapDivide'>
                  <Checkbox type="radio" id='female' name='gender' value='female'
                    {...register('gender', { required: "Enter your gender" })} />
                  <label htmlFor='female'>Female</label>
                </div>
              </span>
            </ForgetDiv>
            <div className='FormError'>
              {errors.gender && <p>gender id required.</p>}
            </div>
          </Form>

          <div className='spacetop'>
            <h1 className='TopHeading'>Education</h1>
            <Form>
              <div className='FormSpace'>
                <label htmlFor='degree' className='Label'>Degree</label>
                <input type='text' placeholder='Degree' className='FormInput'
                  {...register('degree', { required: "Enter your degree" })} />
              </div>
              <div className='FormError'>
                {errors.degree && <p>degree id required.</p>}
              </div>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='skills' className='Label'>Skill</label>
                  <input type="text" placeholder='Skill..' className='FormInput'
                    {...register('skills', { required: "Enter your skills" })} />

                </div>
                <div className='FormError'>
                  {errors.skills && <p>skills id required.</p>}
                </div>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='institute' className='Label'>Institute</label>
                  <input type='text' placeholder='Institute' className='FormInput'
                    {...register('institute', { required: "Enter your institute" })} />
                </div>
                <div className='FormError'>
                  {errors.institute && <p>institute id required.</p>}
                </div>
              </div>

              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Experience</label>
                  {/* <div className='SelectFlex simple-dropdown FormInput' onClick={ExperienceDropdownOpen}>
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
                  </div> */}
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
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Projects</label>
                  <input type='text' placeholder='Projects' className='FormInput'
                    {...register('projects', { required: "Enter your projects" })} />
                </div>
                <div className='FormError'>
                  {errors.projects && <p>projects id required.</p>}
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
                  <input type='text' placeholder='Location' className='FormInput'
                    {...register('location', { required: "Enter your location" })} />
                </div>
                <div className='FormError'>
                  {errors.location && <p>location id required.</p>}
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Phone Number</label>
                  <input type='tel' placeholder='Number' className='FormInput'
                    {...register('phonenumber', { required: "Enter your phonenumber" })} />
                </div>
                <div className='FormError'>
                  {errors.phonenumber && <p>phonenumber id required.</p>}
                </div>
              </div>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth'>
                  <label htmlFor='email' className='Label'>Email</label>
                  <input type='email' placeholder='Email' className='FormInput'
                    {...register('email', { required: "Enter your email" })} />
                </div>
                <div className='FormError'>
                  {errors.email && <p>email id required.</p>}
                </div>
                <div className='InputWidth'>
                  <label htmlFor='personalwebsite' className='Label'>Personal Website</label>
                  <input type='url' placeholder='website' className='FormInput'
                    {...register('personalwebsite', { required: "Enter your personalwebsite" })} />
                </div>
                <div className='FormError'>
                  {errors.personalwebsite && <p>personalwebsite id required.</p>}
                </div>
              </div>

            </Form>
          </div>
          {/* -------------- react quill ------------ */}
          <div className='spacetop'>
            <h1 className='TopHeading'>Biography</h1>
            <Controller
              name='biography'
              control={control}
              rules={{ required: "Enter your bio." }}
              render={({ field, fieldState }) => (
                <>
                  <ReactQuill theme="snow" modules={Modules} className='Quillbar'
                    value={field.value} onChange={field.onChange}
                  />

                  <div className='FormError'>
                    {fieldState.error && <p>biography id required.</p>}
                  </div>
                </>
              )}

            />
          </div>

          <Form>
            <div className='FormGapDivide'>
              <button type='submit' className='FormBtn'>Save Changes</button>
              <button type='button' onClick={isOpen} className='FormBtn'>View Resume</button>
              {isResumeOpen &&
                <Resume onClose={() => setIsResumeOpen(false)} resumeData={watch} />
              }
            </div>
          </Form>


        </form>
      </SettingDiv>
    </div>
  )
}

export default ApplicantCreateResume