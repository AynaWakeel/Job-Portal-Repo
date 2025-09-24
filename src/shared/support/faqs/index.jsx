import React from 'react'
import { Main, Overlay } from './style'
import Footer from '../footer'
import ShowFaqCardComp from '../../../components/show-faq-cards'

const Faqs = () => {

  return (
    <div>
      <Overlay>

        <Main>
          <h2 className='H2'>My Account</h2>

         <ShowFaqCardComp/>

        </Main>


      </Overlay>

      <Footer />
    </div>
  )
}

export default Faqs