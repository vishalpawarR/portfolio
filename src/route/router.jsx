import { createBrowserRouter, Navigate } from "react-router-dom"

//Pages
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"
import RedirectWithUTM from "../components/redirect/RedirectWithUTM"

//Layout
import AppLayout from "../layout/AppLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/utm",
        element: <RedirectWithUTM />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
])
