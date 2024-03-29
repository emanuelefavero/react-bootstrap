import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import UtilitiesPage from './pages/UtilitiesPage'
import CustomVariantsPage from './pages/CustomVariantsPage'
import ServerSideRenderingPage from './pages/ServerSideRenderingPage'
import GridPage from './pages/GridPage'
import StacksPage from './pages/StacksPage'
import FormsPage from './pages/FormsPage'
import TransitionsPage from './pages/TransitionsPage'
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
import PlaceholdersPage from './pages/PlaceholdersPage'
import ProgressBarsPage from './pages/ProgressBarsPage'
import SpinnersPage from './pages/SpinnersPage'
import TablesPage from './pages/TablesPage'
import TabsPage from './pages/TabsPage'
import ToastsPage from './pages/ToastsPage'
import ColorModesPage from './pages/ColorModesPage'

const router = createBrowserRouter([
  // * HOME
  {
    path: '/',
    element: <Home />,
  },

  // * UTILITIES
  // * Utilities
  {
    path: '/utilities',
    element: <UtilitiesPage />,
  },

  // * THEMING
  // * Custom Variants
  {
    path: '/custom-variants',
    element: <CustomVariantsPage />,
  },

  // * Color Modes
  {
    path: '/color-modes',
    element: <ColorModesPage />,
  },

  // * SERVER-SIDE RENDERING
  // * Server-side Rendering
  {
    path: '/server-side-rendering',
    element: <ServerSideRenderingPage />,
  },

  // * LAYOUT
  // * Grid
  {
    path: '/grid',
    element: <GridPage />,
  },
  // * Stacks
  {
    path: '/stacks',
    element: <StacksPage />,
  },

  // * FORMS
  // * Forms
  {
    path: '/forms',
    element: <FormsPage />,
  },

  // * TRANSITIONS
  {
    path: '/transitions',
    element: <TransitionsPage />,
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

  // * Toasts
  {
    path: '/toasts',
    element: <ToastsPage />,
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

  // * Placeholders
  {
    path: '/placeholders',
    element: <PlaceholdersPage />,
  },

  // * Progress bars
  {
    path: '/progress-bars',
    element: <ProgressBarsPage />,
  },

  // * Spinners
  {
    path: '/spinners',
    element: <SpinnersPage />,
  },

  // * Tables
  {
    path: '/tables',
    element: <TablesPage />,
  },

  // * Tables
  {
    path: '/tabs',
    element: <TabsPage />,
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
