import React, { useEffect, useState } from 'react'
import { Overlay, Section } from './style'
import Img from '../../../../src/assets/images/Illustrations2.svg'
import Footer from '../footer'
import { Admin_Endpoints } from '../../../lib/api/admin_endpoints'

const ContactUs = () => {
  const [contact, setContact] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await Admin_Endpoints.get_Contactus()
      if (res?.data?.data) {
        setContact(res.data.data)
      }
    }
    fetchData()
  }, [])

  return (
    <div>

       <Overlay>

        <Section>
          <div className='sec-content'>
            <h4 className='H4'>{contact.title}</h4>
            <h2 className='H2'>{contact.heading}</h2>
            <p className='para' dangerouslySetInnerHTML={{ __html: contact.description }}></p>
          </div>
          <div className='sec-img'>
            <img src={Img} alt='img' />
          </div>
        </Section>
      </Overlay>

      <Footer />
    </div>
  )
}

export default ContactUs