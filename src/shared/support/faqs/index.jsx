import React from 'react'
import { Main, Overlay } from './style'
import Footer from '../footer'
import FaqCardComp from '../../../components/faqs-card-comp'

const Faqs = () => {

  return (
    <div>
      <Overlay>

        <Main>
          <h2 className='H2'>My Account</h2>

         <FaqCardComp/>

        </Main>


      </Overlay>

      <Footer />
    </div>
  )
}

export default Faqs