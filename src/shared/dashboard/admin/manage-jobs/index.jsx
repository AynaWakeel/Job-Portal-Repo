import React from 'react'
import { Main } from './style'
import ManageJobCards from '../../../../components/admin-manage-jobs'

const ManageJobs = () => {
  return (
    <div>

      <Main>
        <div>
          <h1 className='TopHeading'>Manage Jobs</h1>
        </div>

        <div>
          <ManageJobCards/>
        </div>
      </Main>

    </div>
  )
}

export default ManageJobs