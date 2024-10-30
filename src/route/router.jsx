import { createBrowserRouter, Navigate } from "react-router-dom"

//Pages
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"
import Links from "../pages/Links"

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
        path: "links",
        element: <Links />,
      },
      {
        path: "hire-email",
        element: (
          <Navigate
            to="/?utm_source=email&utm_medium=direct&utm_campaign=job_application&utm_content=recruiter"
            replace
          />
        ),
      },
      {
        path: "hire-linkedin",
        element: (
          <Navigate
            to="/?utm_source=linkedin&utm_medium=social&utm_campaign=job_application&utm_content=linkedin_message"
            replace
          />
        ),
      },
      {
        path: "hire-whatsapp",
        element: (
          <Navigate
            to="/?utm_source=whatsapp&utm_medium=social&utm_campaign=job_application&utm_content=personal_message"
            replace
          />
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
])
