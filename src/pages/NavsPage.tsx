import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

export default function NavsPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Navs</h1>
      <p>
        Documentation and examples for how to use Bootstrap’s included
        navigation components.
      </p>

      <Nav
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href='#'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='disabled' disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {
        // * TABS
      }

      <Nav variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='#'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='disabled' disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
