import React, {useState} from 'react'
import { Outlet } from 'react-router'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className='flex min-h-screen w-full'>
        <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}/>
        <div className='flex flex-1 flex-col'>
            <AdminHeader setOpen={setOpenSidebar}/>
             <main className='flex flex-1 bg-muted/40 p-4 md:p-6 flex-col'>
                <Outlet/>
            </main>
        </div>

    </div>
  )
}

export default AdminLayout