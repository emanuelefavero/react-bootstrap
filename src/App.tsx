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
import CardsPage from './pages/CardsPage'
import CarouselsPage from './pages/CarouselsPage'
import CloseButtonPage from './pages/CloseButtonPage'
import DropdownsPage from './pages/DropdownsPage'
import FiguresPage from './pages/FiguresPage'
import ImagesPage from './pages/ImagesPage'
import ListGroupsPage from './pages/ListGroupsPage'
import ModalsPage from './pages/ModalsPage'
import NavbarsPage from './pages/NavbarsPage'
import NavsPage from './pages/NavsPage'
import OffcanvasPage from './pages/OffcanvasPage'
import OverlayPage from './pages/OverlayPage'
import PaginationPage from './pages/PaginationPage'

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

  // * Cards
  {
    path: '/cards',
    element: <CardsPage />,
  },

  // * Carousels
  {
    path: '/carousels',
    element: <CarouselsPage />,
  },

  // * Close Button
  {
    path: '/close-button',
    element: <CloseButtonPage />,
  },

  // * Dropdowns
  {
    path: '/dropdowns',
    element: <DropdownsPage />,
  },

  // * Figures
  {
    path: '/figures',
    element: <FiguresPage />,
  },

  // * Images
  {
    path: '/images',
    element: <ImagesPage />,
  },

  // * List Groups
  {
    path: '/list-groups',
    element: <ListGroupsPage />,
  },

  // * Modals
  {
    path: '/modals',
    element: <ModalsPage />,
  },

  // * Navbars
  {
    path: '/navbars',
    element: <NavbarsPage />,
  },

  // * Navs
  {
    path: '/navs',
    element: <NavsPage />,
  },

  // * Offcanvas
  {
    path: '/offcanvas',
    element: <OffcanvasPage />,
  },

  // * Overlay
  {
    path: '/overlay',
    element: <OverlayPage />,
  },

  // * Pagination
  {
    path: '/pagination',
    element: <PaginationPage />,
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
