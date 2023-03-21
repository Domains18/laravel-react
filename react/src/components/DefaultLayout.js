import React from 'react';
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

function DefaultLayout() {
  
  return (
    <div>DefaultLayout
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
