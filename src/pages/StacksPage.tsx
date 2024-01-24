import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Stacks() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Stacks</h1>
      <p>
        Shorthand helpers that build on top of our flexbox utilities to make
        component layout faster and easier than ever
      </p>

      <style type='text/css'>
        {`
          .box {
            background-color: rgba(238, 0, 238, 0.2);
            border: 1px solid #909;
          }
        `}
      </style>

      <h2 className='mb-3'>Vertical Stack</h2>
      <Stack gap={2}>
        <div className='box p-2'>First</div>
        <div className='box p-2'>Second</div>
      </Stack>

      <h2 className='mb-3 mt-3'>Horizontal Stack</h2>
      <Stack direction='horizontal' gap={3}>
        <div className='box p-2'>First</div>
        <div className='box p-2'>Second</div>
      </Stack>

      {
        // TIP: me-auto and ms-auto are Bootstrap's margin helpers. me means margin-end and ms means margin-start
      }

      <h2 className='mb-3 mt-3'>Inline Form with horizontal Stack</h2>
      <Stack direction='horizontal' gap={3}>
        <Form.Control className='me-auto' placeholder='Write something...' />
        <Button variant='primary'>Submit</Button>
        <div className='vr'></div>
        <Button variant='secondary'>Reset</Button>
      </Stack>
    </>
  )
}
