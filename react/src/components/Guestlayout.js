import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from "../context/contextProvider";


const Guestlayout = () => {

  const { token } = useStateContext()
  // debugger;

  if (!token) {
    return <Navigate to="/" />

  }


  return (
    <div>
      <h1>Guest Layout</h1>
      <Outlet />
    </div>
  )
}

export default Guestlayout
