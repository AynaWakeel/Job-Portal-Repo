import React, { useState } from 'react'
import { Box, Main } from './style'
import AddLocationModal from '../../../../components/add-location-modal'
import AddIndustryModal from '../../../../components/add-industry-modal'

const ManageCategory = () => {
  const [isOpen,setIsOpen] = useState(false)
  const LocationModal = () =>{
    setIsOpen(!isOpen)
  }

  const [isIndustryOpen,setIsIndustryOpen] = useState(false)
  const IndustryModal = () =>{
    setIsIndustryOpen(!isIndustryOpen)
  }
  return (
    <div>

      <Main>
        <div>
          <h1 className='TopHeading'>Manage category</h1>
        </div>

        <div className='flex-box'>
          <h2 className='Title'>Location</h2>
          <button className='CardBtn' onClick={LocationModal}>Add</button>
        </div>
        <Box>
          <ul className='list'>
            <li>karachi</li>
            <li>lahore</li>
            <li>islamabad</li>
            <li>rahim yar khan</li>
            <li>rawalpindi</li>
            <li>karachi</li>
            <li>lahore</li>
            <li>islamabad</li>
            <li>rahim yar khan</li>
            <li>rawalpindi</li>
            <li>karachi</li>
            <li>lahore</li>
            <li>islamabad</li>
            <li>rahim yar khan</li>
            <li>rawalpindi</li>
            <li>rawalpindi</li>
            <li>karachi</li>
            <li>lahore</li>
            <li>islamabad</li>
            <li>rahim yar khan</li>
          </ul>
        </Box>

        {/* ---------- modal ---------- */}
        {isOpen && 
        <AddLocationModal onClose={()=>setIsOpen(!isOpen)}/>
        }

        {/* ---------- industry  --------- */}
        <div className='flex-box'>
          <h2 className='Title'>Industry</h2>
          <button className='CardBtn' onClick={IndustryModal}>Add</button>
        </div>
        <Box>
          <ul className='list'>
            <li>Information Technology</li>
            <li>Finance & Banking</li>
            <li>Engineering & Manufacturing</li>
            <li>Marketing & Advertising</li>
            <li>Retail & E-commerce</li>
            <li>Construction & Real Estate</li>
            <li>Healthcare & Medical</li>
          </ul>
        </Box>

         {/* ---------- modal ---------- */}
        {isIndustryOpen && 
        <AddIndustryModal onClose={()=>setIsIndustryOpen(!isIndustryOpen)}/>
        }

      </Main>

    </div>
  )
}

export default ManageCategory