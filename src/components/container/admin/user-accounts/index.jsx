
import React, { useEffect, useState } from 'react'
import { Main } from './style'
import StatusClose from '../../../../assets/icons/XCircleRed.svg'
import Check from '../../../../assets/icons/CheckCircle.svg'
import { Admin_Endpoints } from '../../../../lib/api/admin_endpoints'

const UserAccounts = () => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await Admin_Endpoints.get_userAccounts()
      if(res?.data){
        setUsers(res?.data)
      }
      console.log(res.data)
    }
    fetchData()
  },[])
  return (
    <div>

      <Main>
        <div>
          <h1 className='TopHeading'>User Accounts</h1>
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
                  {items.status === 'active'  &&

                    <div className='Activediv'>
                      <span><img src={Check} alt='icon' /></span>
                      <span className='Active'>{items.status}</span>
                    </div>
                  }
                  {items.status === 'deactivate' &&

                    <div className='Activediv'>
                      <span><img src={StatusClose} alt='icon' /></span>
                      <span className='red'>Deactivate</span>
                    </div>
                  }
                  {items.status === 'banned' &&

                    <div className='Activediv'>
                      <span><img src={StatusClose} alt='icon' /></span>
                      <span className='red'>Reported</span>
                    </div>
                  }

                  {items.status === 'deleted' &&

                    <div className='Activediv'>
                      <span><img src={StatusClose} alt='icon' /></span>
                      <span className='red'>Deleted</span>
                    </div>
                  }
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </Main>

    </div>
  )
}

export default UserAccounts