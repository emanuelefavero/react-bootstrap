// * BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import AccordionPage from './pages/AccordionPage'
import AlertPage from './pages/AlertPage'
import BadgesPage from './pages/BadgesPage'

const router = createBrowserRouter([
  // * HOME
  {
    path: '/',
    element: <Home />,
  },

  // * BOOTSTRAP COMPONENTS
  // * Accordion
  {
    path: '/accordion',
    element: <AccordionPage />,
  },

  // * Alert
  {
    path: '/alert',
    element: <AlertPage />,
  },

  // * Badges
  {
    path: '/badges',
    element: <BadgesPage />,
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
