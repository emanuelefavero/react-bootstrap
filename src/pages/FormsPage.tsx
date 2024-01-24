import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FormsPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert(`Email: ${email}\nPassword: ${password}`)
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Forms</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formCheckbox'>
          <Form.Check
            type='checkbox'
            label='Check me out'
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' disabled={!checkbox && true}>
          Submit
        </Button>
      </Form>
    </>
  )
}
