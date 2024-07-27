import React from 'react'
import Topnavig from './Components/Nvabar1'
import { Outlet } from 'react-router-dom'
export const Landing = () => {
  return (
    <>
      <Topnavig/>
      <div className='back1'>
        <Outlet/>
      </div>
    </>
  )
}
export default Landing
