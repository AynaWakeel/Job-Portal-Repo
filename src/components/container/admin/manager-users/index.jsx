import React, { useState } from 'react'
import { Main } from './style'
import ThreeDot from '../../../../assets/icons/DotsThreeVertical.svg'
import { ManageUserTable } from '../../../../helper/dummyData'
import { useNavigate } from 'react-router'

const ManageUsers = () => {
  const [isOpen, setIsOpen] = useState(null)
  const Opendropdown = (rowIndex) => {
    if(isOpen === rowIndex){
      setIsOpen(null)
    }else{
      setIsOpen(rowIndex)
    }
  }

  const navigate = useNavigate()
  const Profile = ()=>{
    navigate('/admin/dashboard/applicant-profile')
  }
  return (
    <div>

      <Main>
        <div className='flex-box'>
          <h1 className='TopHeading'>Manage Users</h1>
          <div className='flex'>
            <button className='CardBtn'>Recruiter</button>
            <button className='CardBtn'>Applicant</button>
          </div>
        </div>
        
        <table className='Table'>
          <thead className='Tableheading'>
            <tr className='Tabletop'>
              <th>Name</th>
              <th>Email</th>
              <th>Ph.#</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='TableBody'>
            {ManageUserTable.map((items,index) => (

              <tr className='TableContent' key={index}>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>
                  <div className='position'>
                    <img src={ThreeDot} alt='dot' onClick={()=>Opendropdown(index)} />
                    <button className='CardBtn' onClick={Profile}>View</button>
                    {isOpen === index &&
                      <div className='dropdown'>
                        <ul>
                          <li>Activate</li>
                          <li>Deactivate</li>
                          <li>Report</li>
                          <li>Delete</li>
                        </ul>
                      </div>
                    }
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </Main>


    </div>
  )
}

export default ManageUsers