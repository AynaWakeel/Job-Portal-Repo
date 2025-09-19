import React from 'react'
import { Overlay, Section } from './style'
import Img from '../../assets/images/unauthorize page.svg'
const UnAuthorized = () => {
  return (
    <div>
        
        <Overlay>
         <Section>
          <div className='sec-content'>
            <h2 className='H2'>Unauthorize Page</h2>
            <p className='para'>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus.</p>
          </div>
          <div className='sec-img'>
            <img src={Img} alt='img' />
          </div>
        </Section>
        </Overlay>

    </div>
  )
}

export default UnAuthorized