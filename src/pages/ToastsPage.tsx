import { Link } from 'react-router-dom'
import { useState } from 'react'
import Toast from 'react-bootstrap/Toast'

export default function ToastsPage() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(!show)
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Toasts</h1>
      <p>
        Push notifications to your visitors with a toast, a lightweight and
        easily customizable alert message.
      </p>

      {
        // TIP: Use animation={false} to disable the fade animation
      }

      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <strong className='me-auto'>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </>
  )
}
