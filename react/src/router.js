import React from "react";
import './index.css';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import ErrorPage from './error/Index';
import Defaultlayout from './components/Defaultlayout';
import Guestlayout from './components/Guestlayout';
import Dashboard from './views/Dashboard';


import { Navigate, createBrowserRouter } from 'react-router-dom';


const routes = createBrowserRouter([
    {
        path: "/", element: <Defaultlayout />,
        children: [
            { path: "/", element: <Navigate to="/users"/> },
            { path: "/users", element: <Users /> },
            { path: "/dashboard", element: <Dashboard /> },
        ]
    },
    {
        path: "/", element: <Guestlayout />, children: [
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
        ]
    },
    { path: "*", element: <ErrorPage /> },
]);




export default routes;
