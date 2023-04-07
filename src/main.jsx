import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<h3>hello router</h3>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
