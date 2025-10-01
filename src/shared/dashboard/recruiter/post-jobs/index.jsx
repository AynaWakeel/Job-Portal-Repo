import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form, Jobdiv, SettingDiv } from './style'
import { Controller, useForm } from 'react-hook-form';
import { useRecruiter } from '../useRecruiter';
import SelectIndustry from '../../../../components/select-industry';
import { useLocation } from 'react-router';
import Select from 'react-select';
import { Recruiter_Endpoints } from '../../../../lib/api/recruiter_endpoints';

const RecruiterPostaJob = () => {

  const [isEdit, setIsEdit] = useState(null);
  const [industryOptions, setIndustryOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])
  const location = useLocation()
 const jobId = location?.state?.jobId || null;


  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm()

  const { post_a_job, edit_post_job_by_id, have_reported_job_by_id } = useRecruiter()


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await Recruiter_Endpoints.get_industry();
      if (res?.data) {
        const industry = res.data.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setIndustryOptions(industry);
      }

      const locationres = await Recruiter_Endpoints.get_location();
      if (locationres?.data) {
        const locationOtp = locationres.data.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setLocationOptions(locationOtp);
      }

      if (jobId) {
        const jobRes = await have_reported_job_by_id(jobId);
        console.log(jobRes);
        
        if (jobRes?.data?.job) {
          const job = jobRes.data.job;
          reset(
            {
            title: job.title || "",
            experience: job.experience || "",
            salaryMin: job.salaryMin || "",
            salaryMax: job.salaryMax || "",
            jobType: job.jobType || "",
            education: job.education || "",
            jobExpirationDate: job.jobExpirationDate?.split("T")[0] || "",
            description: job.description || "",
            responsibilities: job.responsibilities || "",
            tags: [job.tags?.join(", ")] || "",
            industryId: job.industryId,
          }
        );
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, [jobId, reset]);


const onSubmit = async (data) => {
  try {

    if (jobId) {
      await edit_post_job_by_id(jobId, data);
      setIsEdit(true)
    } else {
      await post_a_job(data);
      setIsEdit(false)
    }
  } catch (error) {
    console.error(error);
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
      <Jobdiv>
        <SettingDiv>
          {/* ------------------------ CREATE RESUME FORM ------------------------------- */}
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <h1 className='TopHeading'>Post a job</h1>
            </div>
            <Form>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Job Title</label>
                  <input type='text' placeholder='Add job title' className='FormInput'
                    {...register("title", { required: "title is req." })} />
                </div>

                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Industry Types</label>
                  <Controller
                    name="industryId"
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

                </div>
              </div>
               <div className='FormSpace FormInputDivide'>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Tags</label>
                  <input type='text' placeholder='Job keywords,tags..' className='FormInput'
                    {...register("tags", { required: "tags are req." })} />
                </div>

                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Location</label>
                  <Controller
                    name="location"
                    control={control}
                    rules={{ required: "Location is required" }}
                    render={({ field }) => (
                      <Select
                        className="inputSelect select"
                        classNamePrefix="select"
                        options={locationOptions}
                        value={locationOptions.find(opt => opt.value === field.value) || null}
                        onChange={(val) => field.onChange(val.value)}
                        placeholder="Location"
                      />
                    )}
                  />

                </div>
              </div>
             

              <div className='FormError'>
                {errors.title && <p>title is required.</p>}
              </div>
              <div className='FormError'>
                {errors.industryId && <p>Industry id required.</p>}
              </div>


            </Form>

            <div className='spacetop'>
              <h1 className='TopHeading'>Advance Information</h1>
              <Form>
                <div className='FormSpace FormInputDivide'>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Education</label>
                    <input type='text' placeholder='Select..' className='FormInput'
                      {...register("education", { required: "education is req." })} />
                  </div>

                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Job Type</label>
                    <input type='text' placeholder='Select..' className='FormInput'
                      {...register("jobType", { required: "jobTypeis req." })} />
                  </div>
                </div>

                <div className='FormError'>
                  {errors.education && <p>Education is required.</p>}
                </div>
                <div className='FormError'>
                  {errors.jobType && <p>jobType is required.</p>}
                </div>

                <div className='FormSpace FormInputDivide'>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Experience</label>
                    <input type='text' placeholder='Select..' className='FormInput'
                      {...register("experience", { required: "experience is req." })} />
                  </div>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Expiration date</label>
                    <input type='text' className='FormInput'
                      {...register("jobExpirationDate", { required: "jobExpirationDate is req." })} />
                  </div>
                </div>
                <div className='FormError'>
                  {errors.experience && <p>experience is required.</p>}
                </div>
                <div className='FormError'>
                  {errors.jobExpirationDate && <p>job Expiration Date is required.</p>}
                </div>
              </Form>
            </div>

            <div className='spacetop'>
              <h1 className='TopHeading'>Salary</h1>
              <Form>
                <div className='FormSpace FormInputDivide'>
                  <div className='InputWidth'>
                    <label htmlFor='' className='Label'>Min Salary</label>
                    <input type='text' placeholder='Minimum Salary' className='FormInput'
                      {...register("salaryMin", { required: "salaryMin is req." })} />
                  </div>
                  <div className='InputWidth'>
                    <label htmlFor='' className='Label'>Max Salary</label>
                    <input type='text' placeholder='Maximum Salary' className='FormInput'
                      {...register("salaryMax", { required: "Max salary is req." })} />
                  </div>
                </div>
                <div className='FormError'>
                  {errors.salaryMin && <p>Min salary is required.</p>}
                </div>
                <div className='FormError'>
                  {errors.salaryMax && <p>Max salary is required.</p>}
                </div>


              </Form>
            </div>
            {/* -------------- react quill ------------ */}
            <div className='spacetop'>
              <h1 className='TopHeading'>Description & Responsibility</h1>
              <Form>
                <div className='FormSpace'>
                  <label htmlFor='' className='Label'>Description</label>
                  <Controller
                    name='description'
                    control={control}
                    rules={{ required: "Enter your bio." }}
                    render={({ field, fieldState }) => (
                      <>
                        <ReactQuill theme="snow" modules={Modules} className='Quillbar' p placeholder='Add Your Job Description..'
                          value={field.value} onChange={field.onChange}
                        />

                        <div className='FormError'>
                          {fieldState.error && <p>Description is required.</p>}
                        </div>
                      </>
                    )}

                  />
                </div>
                <div className='FormSpace'>
                  <label htmlFor='' className='Label'>Responsibility</label>
                  <Controller
                    name='responsibilities'
                    control={control}
                    rules={{ required: "Enter your bio." }}
                    render={({ field, fieldState }) => (
                      <>
                        <ReactQuill theme="snow" modules={Modules} className='Quillbar' placeholder='Add Your Job Responsibility..'
                          value={field.value} onChange={field.onChange}
                        />

                        <div className='FormError'>
                          {fieldState.error && <p>Responsibilities are required.</p>}
                        </div>
                      </>
                    )}

                  />
                </div>
                <button type='submit' className='FormBtn'>
                  {isEdit ? 
                  " Post a job"  :
                  "Update job"
                  
                  }
                </button>

              </Form>
            </div>

          </form>
        </SettingDiv>

      </Jobdiv>
    </div>
  )
}

export default RecruiterPostaJob