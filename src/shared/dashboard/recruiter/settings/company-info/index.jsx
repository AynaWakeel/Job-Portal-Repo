import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form, ProfilePic, SettingDiv, Uploadbanner } from './style'
import Upload from '../../../../../assets/icons/fi_upload-cloud.svg'
import { Controller, useForm } from 'react-hook-form';
import { useRecruiter } from '../../useRecruiter';
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints';

const CompanyInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm()

  const { company_profile, upload_banner, upload_logo } = useRecruiter()

  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const previousData = await Recruiter_Endpoints.get_company_profile();
      if (previousData) {
        reset(previousData);
        setHasData(true);
      } else {
        reset({
          companyName: "",
          aboutUs: "",

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

  const handleUploadLogo = (e) => {
    const file = e.target.files[0]
    if (file) {
      const logo = new FormData()
      logo.append("profilepic", file)
      upload_logo(logo)
    }
  }
  const handleUploadBanner = (e) => {
    const file = e.target.files[0]
    if (file) {
      const banner = new FormData()
      banner.append("bannerImage", file)
      upload_banner(banner)
      // console.log("banner")
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className='TopHeading'>Logo & Banner Image</h1>
          </div>
          <div className='Divide'>
            <div className='flex-top'>
              <div>
                <h3 className='SubHeading'>Upload Logo</h3>
                <ProfilePic>
                  <label className='center'>
                    <div><img src={Upload} alt='upload' /></div>
                    <div>
                      <h5 className='TopHeading'>Browse photo</h5>
                      <h6 className='Para'>A photo larger than 400 pixels work best. Max photo size 5 MB.</h6>
                      <input type="file" accept=".png" hidden onChange={handleUploadLogo} />
                    </div>
                  </label>
                </ProfilePic>
              </div>

              <div>
                <h3 className='SubHeading'>Upload banner</h3>
                <Uploadbanner>
                  <label className='center'>
                    <div><img src={Upload} alt='upload' /></div>
                    <div>
                      <h5 className='TopHeading'>Browse Banner</h5>
                      <h6 className='Para'>A photo larger than 400 pixels work best. Max photo size 5 MB.</h6>
                      <input type="file" accept=".png" hidden onChange={handleUploadBanner} />
                    </div>
                  </label>
                </Uploadbanner>
              </div>

            </div>

            <Form>

              <div className='FormSpace'>
                <label htmlFor='companyName' className='Label'>Company Name</label>
                <input type="text" className='FormInput'
                  {...register("companyName", { required: "Company Name is req." })} />
              </div>
              <div className='FormError'>
                {errors.companyName && <p>Company Name is required.</p>}
              </div>

              {/* <div className='FormSpace'>
                <label htmlFor='' className='Label'>Company Title</label>
                <input type="text" className='FormInput'
                  {...register("", { required: "Company title is req." })} />
              </div>
              <div className='FormError'>
                {errors. && <p>Company title is required.</p>}
              </div> */}

              {/* -------------- react quill ------------ */}
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>About us</label>

                <Controller
                  name='biography'
                  control={control}
                  rules={{ required: "Enter your bio." }}
                  render={({ field, fieldState }) => (
                    <>
                      <ReactQuill theme="snow" modules={Modules} className='Quillbar' placeholder='Write down about your company here. Let the candidate know who we are...'
                        value={field.value} onChange={field.onChange}
                      />

                      <div className='FormError'>
                        {fieldState.error && <p>biography id required.</p>}
                      </div>
                    </>
                  )}

                />
              </div>

              <button type='submit' className='FormBtn'>Save Changes</button>
            </Form>

          </div>
        </form>
      </SettingDiv>
    </div>
  )
}

export default CompanyInfo