import React from 'react'
import { Main } from './style'

const ManageUsers = () => {
  return (
    <div>

      <Main>
        <div>
          <h1 className='TopHeading'>Manage Users</h1>
        </div>

        <div className='Tableheading'>
          <div className='TableFlex'>
            <div><span>Name</span></div>
            <div><span>Email</span></div>
            <div><span>Ph.#</span></div>
          </div>
          <div><span>Active</span></div>
        </div>

        <div>
          
        </div>
      </Main>


    </div>
  )
}

export default ManageUsers