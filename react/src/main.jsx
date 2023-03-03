import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './context/contextProvider';
import { RouterProvider } from 'react-router-dom';
import routes from './router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>
  </React.StrictMode>
)
