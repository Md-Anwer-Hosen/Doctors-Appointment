import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import DoctorsProfile from "../pages/DoctorsProfile/DoctorsProfile";
import MyBooking from "../pages/MyBooking/MyBooking";
import Blog from "../pages/Blog/Blog";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ContactSection from "../pages/ContactSection/ContactSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch("/doc.json"),
        element: <Home />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/doctor/:id",
        loader: () => fetch("/doc.json"),
        element: <DoctorsProfile />,
      },
      {
        path: "/mybooking",
        element: <MyBooking />,
      },
      {
        path: "/blog",
        loader: () => fetch("/blog.json"),
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
