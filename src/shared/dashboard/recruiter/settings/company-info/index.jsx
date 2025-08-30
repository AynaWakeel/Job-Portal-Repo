import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form, ProfilePic, SettingDiv, Uploadbanner } from './style'
import Upload from '../../../../../assets/icons/fi_upload-cloud.svg'

const CompanyInfo = () => {
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
        <form onSubmit="">
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
                      <input type="file" accept=".png" hidden />
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
                      <input type="file" accept=".png" hidden />
                    </div>
                  </label>
                </Uploadbanner>
              </div>

            </div>

            <Form>

              <div className='FormSpace'>
                <label htmlFor='' className='Label'>Company Name</label>
                <input type="text" className='FormInput' />
              </div>
              {/* -------------- react quill ------------ */}
              <div className='FormSpace'>
                <label htmlFor='' className='Label'>About us</label>
                <ReactQuill theme="snow" modules={Modules} className='Quillbar' placeholder='Write down about your company here. Let the candidate know who we are...'/>
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