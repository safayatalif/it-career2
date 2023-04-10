import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Statistics from "./Components/Statistics";
import AppliedJobs from "./Components/AppliedJobs";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details/:jobId',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);