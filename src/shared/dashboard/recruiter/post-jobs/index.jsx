import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Checkbox, ForgetDiv, Form, Jobdiv, SettingDiv } from './style'

const RecruiterPostaJob = () => {
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
          <form onSubmit="">
            <div>
              <h1 className='TopHeading'>Post a job</h1>
            </div>
            <Form>
              <div className='FormSpace FormInputDivide'>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Job Title</label>
                  <input type='text' placeholder='Add job title' className='FormInput' />
                </div>
                <div className='InputWidth FormPassword'>
                  <label htmlFor='' className='Label'>Tags</label>
                  <input type='text' placeholder='Job keywords,tags..' className='FormInput' />
                </div>
              </div>


            </Form>

            <div className='spacetop'>
              <h1 className='TopHeading'>Advance Information</h1>
              <Form>
                <div className='FormSpace FormInputDivide'>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Education</label>
                    <input type='text' placeholder='Select..' className='FormInput' />
                  </div>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Job Type</label>
                    <input type='text' placeholder='Select..' className='FormInput' />
                  </div>
                </div>
                <div className='FormSpace FormInputDivide'>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Experience</label>
                    <input type='text' placeholder='Select..' className='FormInput' />
                  </div>
                  <div className='InputWidth FormPassword'>
                    <label htmlFor='' className='Label'>Expiration date</label>
                    <input type='date' className='FormInput' />
                  </div>
                </div>
              </Form>
            </div>

            <div className='spacetop'>
              <h1 className='TopHeading'>Salary</h1>
              <Form>
                <div className='FormSpace FormInputDivide'>
                  <div className='InputWidth'>
                    <label htmlFor='' className='Label'>Min Salary</label>
                    <input type='number' placeholder='Minimum Salary' className='FormInput' />
                  </div>
                  <div className='InputWidth'>
                    <label htmlFor='' className='Label'>Max Salary</label>
                    <input type='number' placeholder='Maximum Salary' className='FormInput' />
                  </div>
                </div>


              </Form>
            </div>
            {/* -------------- react quill ------------ */}
            <div className='spacetop'>
              <h1 className='TopHeading'>Description & Responsibility</h1>
              <Form>

                <div className='FormSpace'>
                  <label htmlFor='' className='Label'>Description</label>
                  <ReactQuill theme="snow" modules={Modules} className='Quillbar' placeholder='Add Your Job Description..'/>
                </div>
                <div className='FormSpace'>
                  <label htmlFor='' className='Label'>Responsibility</label>
                  <ReactQuill theme="snow" modules={Modules} className='Quillbar' placeholder='Add Your Job Responsibility..' />
                </div>
              </Form>
            </div>

            <Form>
              <div className='FormInputDivide'>
                <button type='submit' className='FormBtn'>Post a job</button>
              </div>
            </Form>


          </form>
        </SettingDiv>

      </Jobdiv>
    </div>
  )
}

export default RecruiterPostaJob