import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'

const GuestLayout = () => {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default GuestLayout
