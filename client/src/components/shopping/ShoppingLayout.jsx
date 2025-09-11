import React from 'react'
import ShoppingHeader from './ShoppingHeader'
import { Outlet } from 'react-router'

const ShoppingLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
        <ShoppingHeader/>

        <main className='flex flex-col w-full'>
           <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout