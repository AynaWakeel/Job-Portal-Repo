import React from 'react'
import { Form, Main } from './style'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller, useForm } from 'react-hook-form';
import { useAdmin } from '../../../useAdmin';
import { useNavigate } from 'react-router';

const CreateFaq = () => {
   
    const {
        register,
        control,
        handleSubmit
    } = useForm()

    const { create_faq_cms } = useAdmin()

    const onSubmit = (data) => {
        create_faq_cms(data)
        console.log(data)
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

            <Main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form>
                        <div className='FormSpace'>
                            <label htmlFor='' className='Label'>Title</label>
                            <input type="text" placeholder='How to post a job?' className='FormInput'
                                {...register('title')} />
                        </div>

                    </Form>

                    {/* -------------- react quill ------------ */}
                    <div className='spacetop'>
                        <label htmlFor='' className='Label'>Description</label>
                        <Controller
                            name='description'
                            control={control}
                            rules={{required:"Desc is req."}}
                            render={({ field, fieldState }) => (

                                <>
                                    <ReactQuill theme="snow" modules={Modules} className='Quillbar'
                                        value={field.value} onChange={field.onChange} />

                                    <div className='FormError'>
                                        {fieldState.error && <p>Desc id required.</p>}
                                    </div>
                                </>

                            )}
                        />

                        <div className='flex-btn'>
                            <button type='button' className='FormBtn'>Cancel</button>
                            <button type='submit' className='FormBtn'>Create</button>
                        </div>
                    </div>

                </form>
            </Main>

        </div>
    )
}

export default CreateFaq