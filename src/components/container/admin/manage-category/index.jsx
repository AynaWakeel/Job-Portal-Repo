import React, { useEffect, useState } from 'react'
import { Box, Main } from './style'
import AddLocationModal from '../../../../components/add-location-modal'
import AddIndustryModal from '../../../../components/add-industry-modal'
import { ReactComponent as Del } from '../../../../assets/icons/XCircle.svg'
import { Admin_Endpoints } from '../../../../lib/api/admin_endpoints'
import { useAdmin } from '../useAdmin'

const ManageCategory = () => {
  const [industryList, setIndustryList] = useState([])
  const [locationList, setLocationList] = useState([])

  const {delete_industry_by_id , delete_location_by_id} = useAdmin()

  const fetchData = async()=>{
    const res = await Admin_Endpoints.get_industry()
    if(res?.data){
        setIndustryList(res.data)
    }
  }

  const fetchLocation = async()=>{
    const res = await Admin_Endpoints.get_location()
    if(res?.data){
      setLocationList(res.data)
    }
  }

   useEffect(()=>{
    fetchData()
    fetchLocation()
   },[])

  const handleDelete = async(id) =>{
    await delete_industry_by_id(id)
    fetchData()
    console.log("industry deleted")
  }

  const handleDeleteLocation = async(id)=>{
    await delete_location_by_id(id)
    fetchLocation()
    console.log(" location deleted")
  }

  const [isOpen, setIsOpen] = useState(false)
  const LocationModal = () => {
    setIsOpen(true)
  }

  const [isIndustryOpen, setIsIndustryOpen] = useState(false)
  const IndustryModal = () => {
    setIsIndustryOpen(true)
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
            {locationList.map((items)=>(

            <li key={items.id}>
              {items.name}
              <Del onClick={()=>handleDeleteLocation(items.id)}/>
            </li>

            ))}
           
          </ul>
        </Box>

        {/* ---------- modal ---------- */}
        {isOpen &&
          <AddLocationModal onClose={() => setIsOpen(false)}  onLoationDone={fetchLocation} />
        }

        {/* ---------- industry  --------- */}
        <div className='flex-box'>
          <h2 className='Title'>Industry</h2>
          <button className='CardBtn' onClick={IndustryModal}>Add</button>
        </div>
        <Box>
          <ul className='list'>
            {industryList.map((items)=>(

            <li key={items.id}>
              {items.name}
              <Del onClick={()=>handleDelete(items.id)} />
            </li>

            ))}
           
          </ul>
        </Box>

        {/* ---------- modal ---------- */}
        {isIndustryOpen &&
          <AddIndustryModal onClose={() => setIsIndustryOpen(false)} onDone={fetchData}/>
        }

      </Main>

    </div>
  )
}

export default ManageCategory