import React, { useEffect, useState } from 'react'
import { Main } from './style'
import ThreeDot from '../../../../assets/icons/DotsThreeVertical.svg'
import { ManageUserTable } from '../../../../helper/dummyData'
import { useNavigate } from 'react-router'
import { Admin_Endpoints } from '../../../../lib/api/admin_endpoints'
import { useAdmin } from '../useAdmin'

const ManageUsers = () => {
  const [isOpen, setIsOpen] = useState(null)
  const [users, setUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [activeRole, setActiveRole] = useState(null)

  const handleFilter = (role) =>{
    setActiveRole(role)
    setUsers(allUsers.filter(user => user.role === role))
  }

  // const {change_manageUsersStatus} = useAdmin()

  // const [status, setStatus] = useState(null)

  // const handleChangeStatus = async(body)=>{
  //  const res = await change_manageUsersStatus(body)
  //  setStatus(res)
  //   console.log("status changed")
  //   setIsOpen(false)
  // }
  
    useEffect(()=>{
      const fetchData = async()=>{
        const res = await Admin_Endpoints.get_manageUsers()
        if(res?.data){
          setUsers(res.data)
          // setAllUsers(res.data)
        }
        console.log(res.data)
      }
      fetchData()
    },[])


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
            <button className={`CardBtn ${activeRole === "recruiter" ? "active" : ""}`} onClick={()=>handleFilter("recruiter")}>Recruiter</button>
            <button className={`CardBtn ${activeRole === "applicant" ? "active" : ""}`} onClick={()=>handleFilter("applicant")}>Applicant</button>
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
            {users.map((items) => (

              <tr className='TableContent' key={items.id}>
                <td>{items.fullName}</td>
                <td>{items.email}</td>
                <td>{items.phoneNumber}</td>
                <td>
                  <div className='position'>
                    <img src={ThreeDot} alt='dot' 
                    onClick={()=>Opendropdown(items.id)} 
                    />
                    <button className='CardBtn' onClick={Profile}>View</button>
                    {isOpen === items.id &&
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