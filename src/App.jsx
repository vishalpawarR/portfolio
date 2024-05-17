import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Resume from "./pages/Resume"

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
        path: "Resume",
        element: <Resume />,
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
