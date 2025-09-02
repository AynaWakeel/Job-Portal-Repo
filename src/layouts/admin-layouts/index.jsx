import React from 'react'
import AdminNavbar from '../../components/navbar/admin'

const AdminLayouts = ({children}) => {
  return (
    <div>
        <AdminNavbar/>

        <div>{children}</div>
    </div>
  )
}

export default AdminLayouts