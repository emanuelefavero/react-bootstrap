import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function UtilitiesPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Utilities</h1>
      <p>
        Bootstrap utilities are a set of utility classes that can be used to
        style content
      </p>

      <h2>Background</h2>
      <div className='bg-success bg-gradient text-white p-2'>Background</div>

      <h2 className='mt-3'>Border</h2>
      <div className='border border-2 border-primary rounded-pill px-3 py-1 mb-2'>
        Border
      </div>
      <div className='border border-2 border-primary rounded px-3 py-1 mb-2'>
        Border
      </div>
      <div className='border border-2 border-primary rounded-start px-3 py-1 mb-2'>
        Border
      </div>

      <h2 className='mt-3'>Text Colors</h2>
      <div className='text-primary'>Text</div>

      <h2 className='mt-3'>Display</h2>
      <div className='d-block bg-warning'>Block</div>
      <div className='d-inline bg-warning'>Inline</div>
      <div className='d-none'>Hide this element</div>

      <h2 className='mt-3'>Flex</h2>
      <div className='d-flex flex-column justify-content-center align-items-center bg-danger text-white'>
        <div>1</div>
        <div>2</div>
      </div>
    </>
  )
}
