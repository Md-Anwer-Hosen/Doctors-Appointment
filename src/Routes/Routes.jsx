import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch("/doc.json"),
        element: <Home />,
      },
    ],
  },
]);

export default router;
