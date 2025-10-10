import React, { useEffect, useState } from 'react'
import { Jobdiv } from './style'
import AllTypesOfJobs from '../../../../components/all-types-of-jobs'
import { Recruiter_Endpoints } from '../../../../lib/api/recruiter_endpoints'
import Loader from '../../../../components/loading-spinner'

const RecruiterAllJobs = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeStatus, setActiveStatus] = useState("pending")

  const handleFilter = async (status, page = 1, limit = 10) => {
    setActiveStatus(status)
    const res = await Recruiter_Endpoints.get_all_job(page, limit)

    if (status === "pending") {
      setJobs(res.data.categories.pending.jobs)
      setTotalPages(res.data.categories.pending.totalPages)
      setCurrentPage(res.data.categories.pending.currentPage)

    } else if (status === "rejected") {
      setJobs(res.data.categories.rejected.jobs)
      setTotalPages(res.data.categories.rejected.totalPages)
      setCurrentPage(res.data.categories.rejected.currentPage)

    } else {
      setJobs(res.data.categories.reported.jobs)
      setTotalPages(res.data.categories.reported.totalPages)
      setCurrentPage(res.data.categories.reported.currentPage)
    }
  }


  const fetchData = async (page = 1, limit = 10) => {
    const res = await Recruiter_Endpoints.get_all_job(page, limit)
    if (res?.data?.categories?.pending?.jobs) {
      setJobs(res.data.categories.pending.jobs)
      setTotalPages(res.data.categories.pending.totalPages)
      setCurrentPage(res.data.categories.pending.currentPage)
      setIsLoading(false)
      console.log(res.data)
      console.log("pending totalpages",res.data.categories.pending.totalPages);
      console.log("pending current page",res.data.currentPage);
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) return <Loader />


  return (
    <div>

      <Jobdiv>

        <div className='flex-box'>
          <h1 className='TopHeading'>All Types of Jobs</h1>
          <div className='flex'>
            <button
              className={`CardBtn ${activeStatus === "pending" ? "active" : ""}`}
              onClick={() => handleFilter("pending")}
            >Pending</button>
            <button
              className={`CardBtn ${activeStatus === "reported" ? "active" : ""}`}
              onClick={() => handleFilter("reported")}
            >Reported</button>
            <button
              className={`CardBtn ${activeStatus === "rejected" ? "active" : ""}`}
              onClick={() => handleFilter("rejected")}
            >Rejected</button>
          </div>
        </div>

        <div className='Tableheading'>
          <div><span>Job</span></div>
          <div className='TableFlex'>
            <div><span>Status</span></div>
          </div>
        </div>

        <div>

          <AllTypesOfJobs jobs={jobs} />
        </div>
      </Jobdiv>

    </div>
  )
}

export default RecruiterAllJobs