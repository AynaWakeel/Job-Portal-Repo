import React, { useEffect, useState } from 'react'
import { Form, Main } from './style'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller, useForm } from 'react-hook-form';
import { useAdmin } from '../../useAdmin';
import { Admin_Endpoints } from '../../../../../lib/api/admin_endpoints';

const CMSContact = () => {
  const {
   register,
   handleSubmit,
   control,
   reset,
  } = useForm()

  const {updata_ContactUs_cms} = useAdmin()

  const [hasData, setHasData] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        const prev = await Admin_Endpoints.get_Contactus()
        if (prev?.data?.data) {
          reset(prev.data.data)
          setHasData(true)
        } else {
          reset({
            title: "",
            heading:"",
            description: ""
          })
          setHasData(false)
        }
      }
      fetchData()
    }, [reset])

  const onSubmit = (data) =>{
    updata_ContactUs_cms(data)
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
              <input type="text" placeholder='How er are?' className='FormInput'
              {...register("title")} />
            </div>
            <div className='FormSpace'>
              <label htmlFor='' className='Label'>Heading</label>
              <input type="text" placeholder='Heading' className='FormInput'
               {...register("heading")}  />
            </div>

          </Form>

          {/* -------------- react quill ------------ */}
          <div className='spacetop'>
            <label htmlFor='' className='Label'>Description</label>

            <Controller
            name='description'
            control={control}
            render={({field})=>(
              
              <ReactQuill theme="snow" modules={Modules} className='Quillbar' 
              value={field.value} onChange={field.onChange}/>

            )}
            />

            <button type='submit' className='FormBtn'>Save Changes</button>
          </div>

        </form>
      </Main>

    </div>
  )
}

export default CMSContact