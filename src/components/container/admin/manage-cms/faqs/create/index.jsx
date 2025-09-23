import React, { useEffect } from 'react'
import { Form, Main } from './style'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller, useForm } from 'react-hook-form';
import { useAdmin } from '../../../useAdmin';
import { Admin_Endpoints } from '../../../../../../lib/api/admin_endpoints';

const CreateFaq = ({ faqData, onCancel, onBack }) => {

    const {
        register,
        control,
        reset,
        handleSubmit
    } = useForm()

    const { create_faq_cms, update_faq_cms } = useAdmin()

    useEffect(() => {
        if (faqData) {
            reset({
                title: faqData.title,
                description: faqData.description
            });
        } else {
            reset({ 
                title: '', description: '' 
            });
        }
    }, [faqData,reset])

    const onSubmit = async (data) => {
        try {
            if (faqData) {
                await update_faq_cms(faqData.id, data);
            } else {
                await create_faq_cms(data);
            }
            onBack();
        } catch (error) {
            console.error(error);
        }
    };

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
                            rules={{ required: "Desc is req." }}
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

                    </div>

                    <div className='flex-space'>
                        <button type='button' className='FormBtn' onClick={onBack}>Back</button>
                        <div className='flex-btn'>
                            <button type='button' className='FormBtn' onClick={onCancel}>Cancel</button>
                            <button type='submit' className='FormBtn'> {faqData ? "Update" : "Create"} </button>
                        </div>
                    </div>

                </form>
            </Main>

        </div>
    )
}

export default CreateFaq