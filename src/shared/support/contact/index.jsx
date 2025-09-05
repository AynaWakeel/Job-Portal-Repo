import React from 'react'
import { Form, Overlay, Section } from './style'
import Footer from '../footer'

const ContactUs = () => {
  return (
    <div>
      <Overlay>
        <Section>
          <div className='sec-content'>
            <h4 className='H4'>Who we are</h4>
            <h2 className='H2'>We care about customer services</h2>
            <p className='para'>Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.</p>
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