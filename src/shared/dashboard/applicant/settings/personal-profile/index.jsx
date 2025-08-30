import React from 'react'
import { Form, ProfilePic, SettingDiv, UploadPdf } from './style'
import Upload from '../../../../../assets/icons/fi_upload-cloud.svg'
import { ReactComponent as File } from '../../../../../assets/icons/FileText.svg'


const ApplicantPersonalProfile = () => {

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
                  <input type="text" placeholder='Experience' className='FormInput' />
                </div>
                <div className='InputWidth'>
                  <label htmlFor='' className='Label'>Education</label>
                  <input type="text" placeholder='Education' className='FormInput' />
                </div>
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