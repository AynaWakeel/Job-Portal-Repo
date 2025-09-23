import React, { useState } from 'react'
import FaqCardComp from '../../../../../../components/faqs-card-comp'
import { Main } from './style'
import { useNavigate } from 'react-router'
import CreateFaq from '../create'

const CMSfaqs = () => {
   const [isOpen,setIsOpen] = useState(false)
   const [isFaqSelected , setIsFaqSelected] = useState(null)

    const handleAdd = () => {
    setIsFaqSelected(null); 
    setIsOpen(true);
    }

   const handleClose = () =>{
      setIsOpen(false)
      setIsFaqSelected(null)
   }

   const handleEdit = (data) =>{
    setIsOpen(true)
    setIsFaqSelected(data)
   } 

  return (
    <div>

      <Main>

        <div className='flex-box'>
          <h2 className='Title'>Manage Faqs</h2>
          <button className='CardBtn' onClick={handleAdd}>Add</button>
        </div>

        {isOpen ?   
        <CreateFaq faqData={isFaqSelected} onCancel={handleClose} onBack={handleClose}/>  :
        
        <FaqCardComp onEdit={handleEdit}/>
         }
      </Main>

    </div>
  )
}

export default CMSfaqs