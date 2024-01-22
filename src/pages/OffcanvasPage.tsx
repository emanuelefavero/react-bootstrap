import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function OffcanvasPage() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Offcanvas</h1>
      <p>
        Build hidden sidebars into your project for navigation, shopping carts,
        and more.
      </p>

      {
        // TIP: placement prop can be 'start', 'end', 'top', or 'bottom'
      }

      <Button variant='primary' onClick={handleShow}>
        Open Offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
