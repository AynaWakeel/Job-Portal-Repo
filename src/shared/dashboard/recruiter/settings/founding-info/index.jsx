import React from 'react'
import { Form, SettingDiv } from './style'


const FoundingInfo = () => {
  return (
    <div>
      <SettingDiv>
        <form onSubmit="">

          <Form>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Organization Type</label>
                <input type='text' placeholder='Select..' className='FormInput' />
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Industry Types</label>
                <input type='text' placeholder='Select..' className='FormInput' />
              </div>

            </div>
            <div className='FormSpace FormInputDivide'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Team Size</label>
                <input type='text' placeholder='Select..' className='FormInput' />
              </div>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Year of Establishment</label>
                <input type='date' className='FormInput' />
              </div>
            </div>
            <div className='FormSpace'>
              <div className='InputWidth'>
                <label htmlFor='' className='Label'>Company Website</label>
                <input type='url' placeholder='Website Url..' className='FormInput' />
              </div>
            </div>

            <div className='FormSpace'>
              <button type='submit' className='FormBtn'>Save Changes</button>
            </div>
          </Form>

        </form>
      </SettingDiv>
    </div>
  )
}

export default FoundingInfo