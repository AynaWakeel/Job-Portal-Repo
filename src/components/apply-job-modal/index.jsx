import React from 'react'
import { Main, Overlay, UploadPdf } from './style'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Close from '../../assets/icons/fi_x.svg'
import { Controller, useForm } from 'react-hook-form';
import { useApplicant } from '../../shared/dashboard/applicant/useApplicant';

const ApplyModal = ({ jobId , onClose }) => {
    const {
        control,
        handleSubmit
    } = useForm()

    const {apply_job_by_id} = useApplicant()

    const onSubmit = async(data) =>{

        const cleanText = data.coverLetter?.replace(/<[^>]+>/g, '').trim();
        const payload = {
          ...data,
          coverLetter: cleanText,
        };
        await apply_job_by_id(jobId,payload)
        onClose()
        console.log(jobId, payload, "from apply job");
        
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
            <Overlay>
                <Main>
                    <div>
                        <h2 className='TopHeading'>Apply Job</h2>
                        <div className='Circle' >
                            <img src={Close} alt='close' onClick={onClose} />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='spacetop'>
                        <h1 className='SubHeading'>Cover Letter</h1>
                        <Controller
                          name='coverLetter'
                          control={control}
                          defaultValue=""
                          render={({field})=>(                             
                              <ReactQuill theme="snow" modules={Modules} className='Quillbar' 
                              value={field.value || ""} 
                               onChange={(val) => field.onChange(val)}/>
                          )}
                        />
                    </div>
                    <div className=' flexBtn'>
                        <button type='button' className='FormBtn' onClick={onClose}>Cancel</button>
                        <button type='submit' className='FormBtn'>Send</button>
                    </div>

                    </form>
                </Main>
            </Overlay>
        </div>
    )
}

export default ApplyModal