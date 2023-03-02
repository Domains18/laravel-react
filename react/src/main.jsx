import React from 'react'


import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Login from './views/Login';
import Signup from './views/Signup'
import Users from './views/Users'
import ErrorPage from './error/Index';
import Defaultlayout from './components/Defaultlayout'
import Guestlayout from './components/Guestlayout'
import Dashboard from './views/Dashboard'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ContextProvider } from './context/contextProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Defaultlayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/Dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/',
    element: <Guestlayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
