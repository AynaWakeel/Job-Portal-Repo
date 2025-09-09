import React from 'react'
import { Form, Main } from './style'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateFaq = () => {
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
                            <input type="text" placeholder='How to post a job?' className='FormInput' />
                        </div>

                    </Form>

                    {/* -------------- react quill ------------ */}
                    <div className='spacetop'>
                        <label htmlFor='' className='Label'>Description</label>
                        <ReactQuill theme="snow" modules={Modules} className='Quillbar' />

                     <div className='flex-btn'>
                        <button type='submit' className='FormBtn'>Cancel</button>
                        <button type='submit' className='FormBtn'>Create</button>
                     </div>
                    </div>

                </form>
            </Main>

        </div>
    )
}

export default CreateFaq