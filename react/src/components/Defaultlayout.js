import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider';
import { Link } from 'react-router-dom';

const Defaultlayout = () => {
  
  const { user, token } = useStateContext();

  const onLogout = (ev) => {
    ev.preventDefault();
    console.log('logout')
  }




  if (token) {
    return <Navigate to="/" />

  }
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users"> Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {
              user?.name && <span>{user.name}</span>
            }
            < a href='#' className='btn-logout' onClick={onLogout}>Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Defaultlayout
