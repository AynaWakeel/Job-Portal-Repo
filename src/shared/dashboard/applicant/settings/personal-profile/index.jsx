import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Dropdown, Form, ProfilePic, SettingDiv, UploadPdf } from './style'
import Upload from '../../../../../assets/icons/fi_upload-cloud.svg'
import { ReactComponent as File } from '../../../../../assets/icons/FileText.svg'
import { ReactComponent as Arrowup } from '../../../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../../../assets/icons/fi_chevron-down.svg'
import { Controller, useForm } from 'react-hook-form';
import { useApplicant } from '../../useApplicant';
import { Applicant_Endpoints } from '../../../../../lib/api/applicant_endpoints';
import CustomSelect from '../../../../../components/custome-select';
import Select from 'react-select';

const ApplicantPersonalProfile = () => {
   const [experienceSelected, setExperienceSelected] = useState(null);
    const experienceOptions = [
     
      { value: "Freshers", label: "Freshers" },
      { value: "1-2", label: "1 - 2 Years" },
      { value: "2-4", label: "2 - 4 Years" },
      { value: "4-6", label: "4 - 6 Years" },
      { value: "6-8", label: "6 - 8 Years" },
      { value: "8-10", label: "8 - 10 Years" },
      { value: "10-15", label: "10 - 15 Years" },

      
    ]

  // const experienceOptions = [
  //   "Freshers",
  //   "1 - 2 Years",
  //   "2 - 4 Years",
  //   "4 - 6 Years",
  //   "6 - 8 Years",
  //   "8 - 10 Years",
  //   "10 - 15 Years",
  // ]

   const [educationSelected, setEducationSelected] = useState(null);
    const educationOptions = [
     
      { value: "Diploma", label: "Diploma" },
      { value: "Internship/A-Level", label: "Internship/A-Level" },
      { value: "Bachelor's Degree", label: "Bachelor's Degree" },
      { value: "Master's Degree", label: "Master's Degree" },
      { value: "MPhil", label: "MPhil" },
      { value: "PhD", label: "PhD" },
      
    ]
  // const educationOptions = [
  //   "Diploma",
  //   "Internship/A-Level",
  //   "Bachelor's Degree",
  //   "Master's Degree",
  //   "MPhil",
  //   "PhD",
  // ]

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { profile_setting, profile_pic, upload_resume } = useApplicant()

  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const previousData = await Applicant_Endpoints.get_profile();
      if (previousData) {
        reset(previousData);
        setHasData(true);
      } else {
        reset({
          profilepic:"",
          resume:"",
          fullname: "",
          title: "",
          experience: "",
          education: "",
          personalwebsite: "",
          bioGraphy: ""
        });
        setHasData(false);
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = (data) => {
    profile_setting(data)
    console.log(data)
  }

  const handleProfilePic = (e) => {
    const file = e.target.files[0]
    if (file) {
      const picData = new FormData()
      picData.append("profilepic", file)
      profile_pic(picData);
    }
  }
  const handleUploadResume = (e) => {
    const file = e.target.files[0]
    if (file) {
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
                  <h5 className='TopHeading'>Browse photo </h5>
                  {/* <h6 className='Para'>A photo larger than 400 pixels work best. Max photo size 5 MB.</h6> */}
                  <input type="file" accept=".png" hidden
                    onChange={handleProfilePic} />
                </div>
              </label>
            </ProfilePic>

            <UploadPdf>
              <label className='center'>
                <div><File className='IconColor' /></div>
                <div>
                  <h5 className='Title'>Professional Resume</h5>
                  <h6 className='info'>3.5 MB</h6>
                  <input type="file" accept=".pdf" hidden onChange={handleUploadResume} />
                </div>
              </label>
            </UploadPdf>

          </div>
          
          <div className='form-div'>

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
                  {/* <CustomSelect
                    name="experience"
                    control={control}
                    rules={{ required: "Enter your experience" }}
                    placeholder="Experience"
                    options={experienceOptions}
                  /> */}

                  <Select
                    className="inputSelect select"
                    classNamePrefix="select"
                    options={experienceOptions}
                    value={experienceSelected}
                    onChange={setExperienceSelected}
                    placeholder="Experience"
                  />

                  <div className='FormError'>
                    {errors.experience && <p>experience id required.</p>}
                  </div>
                </div>

                <div className='InputWidth'>
                  <label htmlFor='education' className='Label'>Education</label>
                  {/* <CustomSelect
                    name="education"
                    control={control}
                    rules={{ required: "Enter your Education" }}
                    placeholder="Education"
                    options={educationOptions}
                  /> */}

                  <Select
                    className="inputSelect select"
                    classNamePrefix="select"
                    options={educationOptions}
                    value={educationSelected}
                    onChange={setEducationSelected}
                    placeholder="Education"
                  />
                  <div className='FormError'>
                    {errors.education && <p>education id required.</p>}
                  </div>
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

        </div>


      </SettingDiv>

    </div>
  )
}

export default ApplicantPersonalProfile