import React, { useEffect, useState } from 'react'
import { Main, Overlay, Section } from './style'
import Category from '../../../components/category'
import Img from '../../../../src/assets/images/Illustrations2.svg'
import Footer from '../footer'
import { Admin_Endpoints } from '../../../lib/api/admin_endpoints'

const AboutUs = () => {
  const [about, setAbout] = useState({})

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await Admin_Endpoints.get_Aboutus()
      if(res?.data?.data){
        setAbout(res.data.data)
      }
    }
    fetchData()
  },[])
  return (
    <div>

      <Overlay>

        <Section>
          <div className='sec-img'>
            <img src={Img} alt='img' />
          </div>
          <div className='sec-content'>
            <h4 className='H4'>{about.title}</h4>
            <h2 className='H2'>{about.heading}</h2>
            <p className='para' dangerouslySetInnerHTML={{__html: about.description}}></p>
          </div>
        </Section>
      </Overlay>
      
        <Footer/>

    </div>
  )
}

export default AboutUs