import React, { useState } from 'react'
import { Main } from './style'
import { ManageUserTable } from '../../../../helper/dummyData'
import StatusClose from '../../../../assets/icons/XCircleRed.svg'
import Check from '../../../../assets/icons/CheckCircle.svg'

const UserAccounts = () => {
  const [Status, setStatus] = useState('reported')
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
            {ManageUserTable.map((items, index) => (

              <tr className='TableContent' key={index}>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>
                  {Status === 'activate' &&

                    <div className='Activediv'>
                      <span><img src={Check} alt='icon' /></span>
                      <span className='Active'>Activate</span>
                    </div>
                  }
                  {Status === 'deactivate' &&

                    <div className='Activediv'>
                      <span><img src={StatusClose} alt='icon' /></span>
                      <span className='red'>Deactivate</span>
                    </div>
                  }
                  {Status === 'reported' &&

                    <div className='Activediv'>
                      <span><img src={StatusClose} alt='icon' /></span>
                      <span className='red'>Reported</span>
                    </div>
                  }

                  {Status === 'deleted' &&

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