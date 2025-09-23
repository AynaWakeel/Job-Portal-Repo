import React, { useState } from 'react'
import FaqCardComp from '../../../../../../components/faqs-card-comp'
import { Main } from './style'
import { useNavigate } from 'react-router'
import CreateFaq from '../create'

const CMSfaqs = () => {
   const [isOpen,setIsOpen] = useState(false)
   const Open = () =>{
      setIsOpen(!isOpen)
   }
  return (
    <div>

      <Main>

        <div className='flex-box'>
          <h2 className='Title'>Manage Faqs</h2>
          <button className='CardBtn' onClick={Open}>Add</button>
        </div>

        {isOpen ?   
        <CreateFaq/>  :
        
        <FaqCardComp />
         }
      </Main>

    </div>
  )
}

export default CMSfaqs