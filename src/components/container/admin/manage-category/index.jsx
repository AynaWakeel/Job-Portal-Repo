import React, { useState } from 'react'
import { Box, Main } from './style'
import AddLocationModal from '../../../../components/add-location-modal'
import AddIndustryModal from '../../../../components/add-industry-modal'
import { ReactComponent as Del } from '../../../../assets/icons/XCircle.svg'

const ManageCategory = () => {
  const [isOpen, setIsOpen] = useState(false)
  const LocationModal = () => {
    setIsOpen(!isOpen)
  }

  const [isIndustryOpen, setIsIndustryOpen] = useState(false)
  const IndustryModal = () => {
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
            <li>
              karachi
              <Del />
            </li>
            <li>lahore
              <Del />
            </li>
            <li>islamabad
              <Del />
            </li>
            <li>rahim yar khan
              <Del />
            </li>
            <li>rawalpindi
              <Del />
            </li>
            <li>karachi
              <Del />
            </li>
            <li>lahore
              <Del />
            </li>
            <li>islamabad
              <Del />
            </li>
            <li>rahim yar khan
              <Del />
            </li>
            <li>rawalpindi
              <Del />
            </li>
            <li>karachi
              <Del />
            </li>
            <li>lahore
              <Del />
            </li>
            <li>islamabad
              <Del />
            </li>
            <li>rahim yar khan
              <Del />
            </li>
            <li>rawalpindi
              <Del />
            </li>
            <li>rawalpindi
              <Del />
            </li>
            <li>karachi
              <Del />
            </li>
            <li>lahore
              <Del />
            </li>
            <li>islamabad
              <Del />
            </li>
            <li>rahim yar khan
              <Del />
            </li>
          </ul>
        </Box>

        {/* ---------- modal ---------- */}
        {isOpen &&
          <AddLocationModal onClose={() => setIsOpen(!isOpen)} />
        }

        {/* ---------- industry  --------- */}
        <div className='flex-box'>
          <h2 className='Title'>Industry</h2>
          <button className='CardBtn' onClick={IndustryModal}>Add</button>
        </div>
        <Box>
          <ul className='list'>
            <li>Information Technology
              <Del />
            </li>
            <li>Finance & Banking
              <Del />
            </li>
            <li>Engineering & Manufacturing
              <Del />
            </li>
            <li>Marketing & Advertising
              <Del />
            </li>
            <li>Retail & E-commerce
              <Del />
            </li>
            <li>Construction & Real Estate
              <Del />
            </li>
            <li>Healthcare & Medical
              <Del />
            </li>
          </ul>
        </Box>

        {/* ---------- modal ---------- */}
        {isIndustryOpen &&
          <AddIndustryModal onClose={() => setIsIndustryOpen(!isIndustryOpen)} />
        }

      </Main>

    </div>
  )
}

export default ManageCategory