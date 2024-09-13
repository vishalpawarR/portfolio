import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Links from "./pages/Links"

//Layout
import AppLayout from "./layout/AppLayout"
import PageNotFound from "./pages/PageNotFound"

const router = createBrowserRouter([
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
          path: 'links',
          element: <Links />
      },
      {
        path: "*",
        element: <PageNotFound />,
      }
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
