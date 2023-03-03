import React from 'react'
import { useStateContext } from '../context/contextProvider'
import { Link, Navigate, Outlet } from 'react-router-dom'



const Defaultlayout = () => {
  const { currentUser, token } = useStateContext();

  //check if token is passed on
  if (!token) {
    // NavigationPreloadManager.push("/login")
    return( <Navigate to="/login" />)
  }

  const onLogout = (ev) => {
    ev.preventDefault();
  }
  return (
    <div>
      <div id="defaultLayout">
        <aside>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
        </aside>
        <div className="content">
          <header>
            <div>
              Header
            </div>
            <div>
              {currentUser ? currentUser.name : "Default User"}
              <a href="#" className='btn logout'>Logout</a>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Defaultlayout
