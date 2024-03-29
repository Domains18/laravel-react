import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (ev) => {
    ev.preventDefault();
  }

  return (
    <div id='defaultLayout'>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            header
          </div>
          <div>
            {user.name}
            <Link onClick={onLogout} className="btn-logout">Logout</Link>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout

// Path: react/src/components/GuestLayout.js
