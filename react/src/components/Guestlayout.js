import React from 'react'
import { Outlet } from 'react-router-dom'

const Guestlayout = () => {
  return (
    <div>
      <h1>Guest Layout</h1>
      <Outlet/> 
    </div>
  )
}

export default Guestlayout
