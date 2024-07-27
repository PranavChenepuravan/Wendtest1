import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar1 = () => {
  return (
    <>
      <div className='w-full h-24 bg-red-600 text-black flex justify-between items-center p-4'>
          <div className='text-xl sm:text-5xl'>
            <p>Share Expense</p>
          </div>
          <div className='flex gap-2 pt-14 pr-4'>
            <Link to='register' >Register</Link>
            <Link to='login'>Login</Link>
          </div>
      </div>
    </>
  )
}

export default Navbar1
