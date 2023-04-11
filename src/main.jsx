import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import AppliedJobs from './components/AppliedJobs';
import { productsAndCartData } from './loaders/getCart&ProductData';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:productsAndCartData,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('category.json'),
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'appliedjobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
