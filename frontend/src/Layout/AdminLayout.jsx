import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const AdminLayout = () => {
  return (
    <>

     <Navbar />
     <div className='d-flex'>
        <Sidebar/>
            <div className='flex-grow-1 p-4'>
            <Outlet />
            </div>
     </div>

    </>
  )
}

export default AdminLayout
