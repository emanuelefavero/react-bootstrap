import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <h2>Bootstrap Components</h2>
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
      </ul>
    </>
  )
}
