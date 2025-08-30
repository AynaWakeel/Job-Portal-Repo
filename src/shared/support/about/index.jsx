import React from 'react'
import { Main, Overlay, Section } from './style'
import Category from '../../../components/category'
import Img from '../../../../src/assets/images/Illustrations2.svg'
import Footer from '../footer'

const AboutUs = () => {
  return (
    <div>

      <Overlay>
        <Main>
          <div className='sec-content'>
            <h4 className='H4'>Who we are</h4>
            <h2 className='H2'>We’re highly skilled and professionals team.</h2>
            <p className='para'>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus.</p>
          </div>
          <div className='sec-cards'>
            <Category limit={3} />
          </div>
        </Main>

        <Section>
          <div className='sec-img'>
            <img src={Img} alt='img' />
          </div>
          <div className='sec-content'>
            <h4 className='H4'>Our Mission</h4>
            <h2 className='H2'>Our mission is help people to find the perfect job.</h2>
            <p className='para'>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus.</p>
          </div>
        </Section>
      </Overlay>
      
        <Footer/>

    </div>
  )
}

export default AboutUs