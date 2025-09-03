import React from 'react'
import { Main } from './style'
import CMSNavbar from '../navbar'

const ManageCMS = () => {
  return (
    <div>

      <Main>
        <div>
          <h1 className='TopHeading'>Manage CMS</h1>
        </div>

         <CMSNavbar/>
      </Main>

    </div>
  )
}

export default ManageCMS