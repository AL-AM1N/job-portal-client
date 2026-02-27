import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../pages/routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
        },
        {
          path:'/jobs/:id',
          Component:JobDetails,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'/JobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'/myApplication',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'/addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path:'/register',
            Component: Register
        }, 
        {
          path:'/singIn',
          Component:SignIn
        }
    ]
  },
]);

export default router
