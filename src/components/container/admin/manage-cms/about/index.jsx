import React from 'react'
import { Form, Main } from './style'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CMSAbout = () => {
  const Modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }

  return (
    <div>

      <Main>
        <form>
          <Form>
            <div className='FormSpace'>
              <label htmlFor='' className='Label'>Title</label>
              <input type="text" placeholder='How er are?' className='FormInput' />
            </div>
            <div className='FormSpace'>
              <label htmlFor='' className='Label'>Heading</label>
              <input type="email" placeholder='Heading' className='FormInput' />
            </div>

          </Form>

          {/* -------------- react quill ------------ */}
          <div className='spacetop'>
            <label htmlFor='' className='Label'>Description</label>
            <ReactQuill theme="snow" modules={Modules} className='Quillbar' />

            <button type='submit' className='FormBtn'>Save Changes</button>
          </div>

        </form>
      </Main>


    </div>
  )
}

export default CMSAbout