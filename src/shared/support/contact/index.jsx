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

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8977972464963!2d70.31426467500064!3d28.42234059359565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375dcb05ac04dd%3A0x13c371e227032eb!2sBuiltinsoft!5e0!3m2!1sen!2s!4v1756288687207!5m2!1sen!2s" width="100%" height="600" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

       <Footer/>
    </div>
  )
}

export default ContactUs