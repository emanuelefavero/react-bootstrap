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
      </ul>
    </>
  )
}
