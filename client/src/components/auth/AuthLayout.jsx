import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='flex min-h-screen w-full'> 
    <div className='hidden lg:flex items-center justify-center bg-black/70 w-1/2 px-12'>

    <div className='max-w-md space-y-6 text-center text-primary-foreground'> 
        <h1 className='text-3xl font-bold tracking-tight'>Welcome to Ecommerce</h1>
    </div>
  

    </div>
      <div className='flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>

        <Outlet />
    </div>
    </div>
  )
}

export default AuthLayout