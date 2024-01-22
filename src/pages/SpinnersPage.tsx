import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

export default function SpinnersPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Spinners</h1>
      <p>Spinners can be used to show the loading state in your projects.</p>

      <Spinner animation='border' role='status' variant='primary'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
      <br />
      <Spinner animation='grow' size='sm' />
    </>
  )
}
