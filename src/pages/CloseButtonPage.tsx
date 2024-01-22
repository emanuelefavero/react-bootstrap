import { Link } from 'react-router-dom'
import CloseButton from 'react-bootstrap/CloseButton'

export default function CloseButtonPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Close Button</h1>
      <p>
        A generic close button for dismissing content such as modals and alerts.
      </p>

      {
        // TIP: aria-label is recommended for accessibility
      }

      <CloseButton aria-label='Close' />
      <CloseButton disabled />
    </>
  )
}
