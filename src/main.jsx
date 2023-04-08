import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Services from './components/Service/Service/Services'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Details from './components/Service/TShirtDetails/Details'
import Loading from './components/Loading/LoadingSpinner'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'services',
        element:<Services/>,
        loader:()=>fetch('T-shirtData.json')
      },
      {
        path:'details/:detailId',
        element:<Details/>,
        loader:({params})=>fetch(`T-shirtData.json/${params.id}`)
      },
      {
        path: "loader",
        element: <Loading />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
