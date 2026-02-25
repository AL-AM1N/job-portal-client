import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

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
          Component:JobDetails
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
