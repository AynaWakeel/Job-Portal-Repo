import React, { useEffect, useState } from 'react'
import { Form, Overlay, Section } from './style'
import Footer from '../footer'
import { Admin_Endpoints } from '../../../lib/api/admin_endpoints'

const ContactUs = () => {
  const [contact, setContact] = useState({})
  
    useEffect(()=>{
      const fetchData = async()=>{
        const res = await Admin_Endpoints.get_Contactus()
        if(res?.data?.data){
          setContact(res.data.data)
        }
      }
      fetchData()
    },[])

  return (
    <div>
      <Overlay>
        <Section>
          <div className='sec-content'>
            <h4 className='H4'>{contact.title}</h4>
            <h2 className='H2'>{contact.heading}</h2>
            <p className='para' dangerouslySetInnerHTML={{__html: contact.description}}></p>
            <button type='submit' className='Btn'>Email Support</button>
          </div>
          <div className='sec-form'>
            <Form>
              <h1 className='FormH1'>Get In Touch</h1>
              <div className='FormSpace FormInputDivide'>
                <div>
                  <input type="text" placeholder='Name' className='FormInput' />
                </div>
                <div>
                  <input type="email" placeholder='Email' className='FormInput' />
                </div>
              </div>

              <div className='FormSpace'>
                <input type="text" placeholder='Subjects' className='FormInput' />
              </div>
              <div className='FormSpace'>
                <textarea className='FormInput' placeholder='Message' rows={5}></textarea>
              </div>

              <button type='submit' className='FormBtn'>Send Message</button>

            </Form>
          </div>
        </Section>
      </Overlay>

       <Footer/>
    </div>
  )
}

export default ContactUs