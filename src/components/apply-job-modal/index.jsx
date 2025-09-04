import React from 'react'
import { Main, Overlay, UploadPdf } from './style'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Close from '../../assets/icons/fi_x.svg'
import { ReactComponent as File } from '../../assets/icons/FileText.svg'

const ApplyModal = ({ onClose }) => {
    const Modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }]
        ]
    }
    return (
        <div>
            <Overlay>
                <Main>
                    <div>
                        <h2 className='TopHeading'>Apply Job: Senior UX Designer</h2>
                        <div className='Circle' >
                            <img src={Close} alt='close' onClick={onClose} />
                        </div>
                    </div>
                    
                    <div className='spacetop'>
                        <h1 className='SubHeading'>Cover Letter</h1>
                        <ReactQuill theme="snow" modules={Modules} className='Quillbar' />
                    </div>
                    <div className=' flexBtn'>
                        <button type='submit' className='FormBtn' onClick={onClose}>Cancel</button>
                        <button type='submit' className='FormBtn'>Send</button>
                    </div>
                </Main>
            </Overlay>
        </div>
    )
}

export default ApplyModal