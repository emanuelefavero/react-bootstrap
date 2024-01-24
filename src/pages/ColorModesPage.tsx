import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function ColorModesPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Color Modes</h1>
      <p>
        Bootstrap v5.3 now supports color modes such as dark mode. Color modes
        can be toggled globally on the <code>{'<html>'}</code> element, or on
        specific components and elements, thanks to the{' '}
        <code>data-bs-theme</code> attribute.
      </p>

      <DropdownButton
        // TIP: You can use 'data-bs-theme' attribute to toggle color modes
        data-bs-theme='dark'
        id='dropdown-basic-button'
        title='Dark Dropdown'
        variant='primary'
      >
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
      </DropdownButton>
    </>
  )
}
