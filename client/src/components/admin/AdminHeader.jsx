import React from 'react'
import { Button } from '../ui/button'
import { AlignJustifyIcon, LogOut } from 'lucide-react'

const AdminHeader = ({setOpen}) => {
  
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button className="sm:block md:hidden"
      onClick={()=>setOpen(true)}
      >
        <AlignJustifyIcon/>
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow">
          <LogOut/>
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader