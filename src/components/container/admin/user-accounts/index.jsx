
import React, { useEffect, useState } from 'react'
import { Main , Pagination } from './style'
import StatusClose from '../../../../assets/icons/XCircleRed.svg'
import Check from '../../../../assets/icons/CheckCircle.svg'
import { Admin_Endpoints } from '../../../../lib/api/admin_endpoints'
import Loader from '../../../loading-spinner'

const UserAccounts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

   const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

  const fetchData = async (page = 1, limit = 10) => {
    const res = await Admin_Endpoints.get_userAccounts(page, limit)
    if (res?.data?.users) {
      setUsers(res?.data.users)
      setTotalPages(res.data.totalPages)
      setCurrentPage(res.data.currentPage)
      setIsLoading(false)
    }
    console.log(res.data)
  }

  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  if (isLoading) return <Loader />

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
                  {items.status === 'active' &&

                    <div className='Activediv'>
                      <span><img src={Check} alt='icon' /></span>
                      <span className='Active'>{items.status}</span>
                    </div>
                  }
                  {items.status === 'inactive' &&

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

      <Pagination>
        <div>
          <button className={`${currentPage === 1 ? "BtnOff" : "Btn"}`} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        </div>
        <div>
          <span className='Num'>{currentPage}</span>
        </div>
        <div>
          <button className={`${currentPage === totalPages ? "BtnOff" : "Btn"}`} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </Pagination>


    </div>
  )
}

export default UserAccounts