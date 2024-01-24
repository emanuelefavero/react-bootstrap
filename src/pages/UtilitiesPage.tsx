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
    </>
  )
}
