import React from 'react'
import Topnavig from './Components/Nvabar2'
import { Outlet } from 'react-router-dom'
export const Home = () => {
  return (
    <>
      <Topnavig/>
      <div className='back1'>
        <Outlet/>
      </div>
    </>
  )
}
export default Home