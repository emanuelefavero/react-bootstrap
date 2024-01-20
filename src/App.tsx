// * BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import BootstrapComponents from './pages/bootstrap-components/Index'
import AccordionPage from './pages/bootstrap-components/AccordionPage'

const router = createBrowserRouter([
  // * HOME
  {
    path: '/',
    element: <Home />,
  },

  // * BOOTSTRAP COMPONENTS
  {
    path: '/bootstrap-components',
    element: <BootstrapComponents />,
    children: [
      // * Accordion
      {
        path: '/bootstrap-components/accordion',
        element: <AccordionPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
