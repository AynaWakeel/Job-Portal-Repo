import React from 'react'
import { ChartBox, Main } from './style'
import BarChart from '../../../../components/bar-chart'
import LineChart from '../../../../components/line-chart'
import AdminAnalyticCards from '../../../../components/admin-analytics'

const AdminOverview = () => {
  return (
    <div>

      <Main>
        <div>
          <h1 className='TopHeading'>Analytics</h1>
        </div>

        <div className='divide'>
          <AdminAnalyticCards />
        </div>

       <div className='divide'>
          <ChartBox>
            <BarChart />
          </ChartBox>

          <ChartBox>
            <LineChart />
          </ChartBox>
       </div>

      </Main>

    </div>
  )
}

export default AdminOverview