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
        path: "direct-apply",
        element: (
          <Navigate
            to="/?utm_source=direct&utm_medium=direct_application&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-resume",
        element: (
          <Navigate
            to="/?utm_source=resume&utm_medium=document&utm_campaign=job_application&utm_content=cv_link"
            replace
          />
        ),
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
        path: "hire-naukri",
        element: (
          <Navigate
            to="/?utm_source=naukri&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-wellfound",
        element: (
          <Navigate
            to="/?utm_source=wellfound&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-weekday",
        element: (
          <Navigate
            to="/?utm_source=weekday&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-yc",
        element: (
          <Navigate
            to="/?utm_source=ycombinator&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-uplers",
        element: (
          <Navigate
            to="/?utm_source=uplers&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-crossover",
        element: (
          <Navigate
            to="/?utm_source=crossover&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-flexiple",
        element: (
          <Navigate
            to="/?utm_source=flexiple&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-hirist",
        element: (
          <Navigate
            to="/?utm_source=hirist&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-cuvette",
        element: (
          <Navigate
            to="/?utm_source=cuvette&utm_medium=job_board&utm_campaign=job_application&utm_content=job_listing"
            replace
          />
        ),
      },
      {
        path: "hire-github",
        element: (
          <Navigate
            to="/?utm_source=github&utm_medium=github_profile&utm_campaign=lets_connect&utm_content=readme_connect"
            replace
          />
        ),
      },
      {
        path: "hire-reactflux",
        element: (
          <Navigate
            to="/?utm_source=reactflux&utm_medium=community&utm_campaign=job_application&utm_content=job_listing"
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
