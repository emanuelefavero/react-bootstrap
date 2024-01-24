import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <h2>Theming</h2>
      <ul>
        <li>
          <Link to='/custom-variants'>Custom Variants</Link>
        </li>
        <li>
          <Link to='/color-modes'>Color Modes</Link>
        </li>
      </ul>

      <h2>Server-side Rendering</h2>
      <ul>
        <li>
          <Link to='/server-side-rendering'>Server-side Rendering</Link>
        </li>
      </ul>

      <h2>Layout</h2>
      <ul>
        <li>
          <Link to='/grid'>Grid</Link>
        </li>
        <li>
          <Link to='/stacks'>Stacks</Link>
        </li>
      </ul>

      <h2>Forms</h2>
      <ul>
        <li>
          <Link to='/forms'>Forms</Link>
        </li>
      </ul>

      <h2>Bootstrap Components</h2>
      <br />
      <ul>
        <li>
          <Link to='/accordion'>Accordion</Link>
        </li>
        <li>
          <Link to='/alert'>Alert</Link>
        </li>
        <li>
          <Link to='/badges'>Badges</Link>
        </li>
        <li>
          <Link to='/breadcrumbs'>Breadcrumbs</Link>
        </li>
        <li>
          <Link to='/button-group'>Button group</Link>
        </li>
        <li>
          <Link to='/button'>Button</Link>
        </li>
        <li>
          <Link to='/cards'>Cards</Link>
        </li>
        <li>
          <Link to='/carousels'>Carousels</Link>
        </li>
        <li>
          <Link to='/close-button'>Close Button</Link>
        </li>
        <li>
          <Link to='/dropdowns'>Dropdowns</Link>
        </li>
        <li>
          <Link to='/figures'>Figures</Link>
        </li>
        <li>
          <Link to='/images'>Images</Link>
        </li>
        <li>
          <Link to='/list-groups'>List Groups</Link>
        </li>
        <li>
          <Link to='/modals'>Modals</Link>
        </li>
        <li>
          <Link to='/navbars'>Navbars</Link>
        </li>
        <li>
          <Link to='/navs'>Navs</Link>
        </li>
        <li>
          <Link to='/offcanvas'>Offcanvas</Link>
        </li>
        <li>
          <Link to='/overlay'>Overlay</Link>
        </li>
        <li>
          <Link to='/pagination'>Pagination</Link>
        </li>
        <li>
          <Link to='/placeholders'>Placeholders</Link>
        </li>
        <li>
          <Link to='/progress-bars'>Progress bars</Link>
        </li>
        <li>
          <Link to='/spinners'>Spinners</Link>
        </li>
        <li>
          <Link to='/tables'>Tables</Link>
        </li>
        <li>
          <Link to='/tabs'>Tabs</Link>
        </li>
        <li>
          <Link to='/toasts'>Toasts</Link>
        </li>
      </ul>
    </>
  )
}
