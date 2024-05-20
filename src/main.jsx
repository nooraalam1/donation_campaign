import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Main';
import Home from './Components/Home';
import Donation from './Components/Donation';
import Stat from './Components/Stat';
import CardView from './Components/CardView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch("/public/Noor.json"),
    },{
      path:'/donation',
      element:<Donation></Donation>
    },
    {
      path:'/stat',
      element:<Stat></Stat>
    },
    {
      path:'/cardview/:id',
      element:<CardView></CardView>,
      loader:()=>fetch("/public/Noor.json")
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
