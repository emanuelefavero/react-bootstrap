// * BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import AccordionPage from './pages/AccordionPage'
import AlertPage from './pages/AlertPage'
import BadgesPage from './pages/BadgesPage'
import BreadcrumbsPage from './pages/BreadcrumbsPage'
import ButtonGroupPage from './pages/ButtonGroupPage'
import ButtonPage from './pages/ButtonPage'

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

  // * Breadcrumbs
  {
    path: '/breadcrumbs',
    element: <BreadcrumbsPage />,
  },

  // * Button group
  {
    path: '/button-group',
    element: <ButtonGroupPage />,
  },

  // * Button
  {
    path: '/button',
    element: <ButtonPage />,
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
