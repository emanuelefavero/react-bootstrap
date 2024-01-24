/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function CustomVariantsPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Custom Variants</h1>
      <p>
        Custom variants and sizes should follow the pattern of the default
        Bootstrap variants, and define css classes matching: component-*.
      </p>

      <style type='text/css'>
        {`
          .btn-my-primary {
            background-color: magenta;
            color: white;
            font-size: 1.5rem;
          }

          .btn-my-primary:hover {
            background-color: purple;
            color: white;
          }
        `}
      </style>

      <Button variant='my-primary'>My Primary Button</Button>
    </>
  )
}
