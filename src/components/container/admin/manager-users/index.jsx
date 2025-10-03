import React, { useEffect, useState } from 'react'
import { Main } from './style'
import ThreeDot from '../../../../assets/icons/DotsThreeVertical.svg'
import { useNavigate } from 'react-router'
import { Admin_Endpoints } from '../../../../lib/api/admin_endpoints'
import { useAdmin } from '../useAdmin'
import Loader from '../../../loading-spinner'

const ManageUsers = () => {
   const [isLoading, setIsLoading] =  useState(true)
  const [isOpen, setIsOpen] = useState(null)
  const [users, setUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [activeRole, setActiveRole] = useState("all")

  const handleFilter = (role) => {
    setActiveRole(role)
    if(activeRole === "all"){
      setUsers(allUsers)
    }else{
      setUsers(allUsers.filter(user => user.role === role))
    }
  }

  const { change_manageUsersStatus } = useAdmin()

  const handleChangeStatus = async (id, newStatus) => {

    const res = await change_manageUsersStatus(id, { type: newStatus })
    setIsOpen(false)
    setAllUsers(prev => prev.map(user => user.id === id ? { ...user, type: newStatus } : user))
    console.log("status changed")
  }

  const fetchData = async () => {
    const res = await Admin_Endpoints.get_manageUsers()
    if (res?.data) {

      if(activeRole === "all"){
        setUsers(res.data)
        setIsLoading(false)
        
      }else{
        setUsers(res.data.filter(user => user.role === activeRole))
        setIsLoading(false)
      }

    }
    console.log(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [activeRole])


  const Opendropdown = (id) => {
    if (isOpen === id) {
      setIsOpen(null)
    } else {
      setIsOpen(id)
    }
  }

  const navigate = useNavigate()
  const Profile = () => {
    navigate('/admin/dashboard/applicant-profile')
  }

   if(isLoading) return <Loader/>

  return (
    <div>

      <Main>
        <div className='flex-box'>
          <h1 className='TopHeading'>Manage Users</h1>
          <div className='flex'>
            <button className={`CardBtn ${activeRole === "all" ? "active" : ""}`} onClick={()=>handleFilter("all")}>All</button>
            <button className={`CardBtn ${activeRole === "recruiter" ? "active" : ""}`} onClick={() => handleFilter("recruiter")}>Recruiter</button>
            <button className={`CardBtn ${activeRole === "applicant" ? "active" : ""}`} onClick={() => handleFilter("applicant")}>Applicant</button>
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
                {/* <td>{items.role}</td> */}
                <td>
                  <div className='position'>
                    <img src={ThreeDot} alt='dot'
                      onClick={() => Opendropdown(items.id)}
                    />
                    <button className='CardBtn' onClick={Profile}>View</button>
                    {isOpen === items.id &&
                      <div className='dropdown'>
                        <ul>
                          <li onClick={() => handleChangeStatus(items.id, "active")}>Activate</li>
                          <li onClick={() => handleChangeStatus(items.id, "inactive")}>Deactivate</li>
                          <li onClick={() => handleChangeStatus(items.id, "banned")}>Report</li>
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