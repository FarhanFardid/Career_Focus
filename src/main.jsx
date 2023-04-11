import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import AppliedJob from './Components/AppliedJob/AppliedJob'
import JobDetails from './Components/JobDetails/JobDetails'
import Statistics from './Components/Statistics/Statistics'
import Blog from './Components/Blog/Blog'
import Error404 from './Components/Error404/Error404'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'appliedJobs',
        element:<AppliedJob></AppliedJob>
      },
      {
        path:'jobDetails/:id',
        element:<JobDetails></JobDetails>
      
        },
      
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'*',
        element:<Error404></Error404>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
