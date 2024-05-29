import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
=======
// import App from './App.jsx'
import './index.css'
>>>>>>> c9b1d4b (Responsive)
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import './index.css'
import Main from './Components/Main';
import Home from './Components/Home';
import Donation from './Components/Donation';
import Stat from './Components/Stat';
import CardView from './Components/CardView';
=======
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Donation from './Components/Donation.jsx';
import Statistics from './Components/Statistics.jsx';
import DonationDetails from './Components/DonationDetails.jsx';
import ErrorPage from './Components/ErrorPage';
>>>>>>> c9b1d4b (Responsive)

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
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
=======
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("/Data.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch("/Data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/:id",
        loader: ()=>fetch("/Data.json"),
        element: <DonationDetails></DonationDetails>
      }
    ]
>>>>>>> c9b1d4b (Responsive)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
   <RouterProvider router={router} />
=======
    <RouterProvider router={router} />
>>>>>>> c9b1d4b (Responsive)
  </React.StrictMode>,
)
