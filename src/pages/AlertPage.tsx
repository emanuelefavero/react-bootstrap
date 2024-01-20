import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

export default function AlertPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Alert</h1>
      <Alert variant='primary'>Primary alert</Alert>
      <Alert variant='secondary'>Secondary alert</Alert>
      <Alert variant='success'>Success alert</Alert>
      <Alert variant='danger'>Danger alert</Alert>
      <Alert variant='warning'>Warning an alert</Alert>
      <Alert variant='info'>Info alert</Alert>
      <Alert variant='light'>Light alert</Alert>
      <Alert variant='dark'>Dark alert</Alert>
    </>
  )
}
