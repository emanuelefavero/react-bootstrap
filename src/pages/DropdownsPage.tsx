import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function DropdownsPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Dropdowns</h1>
      <p>
        Toggle contextual overlays for displaying lists of links and more with
        the Bootstrap dropdown plugin
      </p>

      <Dropdown>
        <Dropdown.Toggle variant='primary' id='dropdown'>
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item href='#/action-1'>Action 1</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Action 2</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='#/action-3'>Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {
        // * SPLIT BUTTON DROPDOWN
      }
      <Dropdown as={ButtonGroup}>
        <Button variant='primary'>Split Button</Button>
        <Dropdown.Toggle
          split
          variant='primary'
          id='dropdown'
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action 1</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Action 2</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='#/action-3'>Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
