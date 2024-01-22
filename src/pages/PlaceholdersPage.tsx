import { Link } from 'react-router-dom'
import Placeholder from 'react-bootstrap/Placeholder'

export default function PlaceholdersPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Placeholders</h1>
      <p>
        Use loading placeholders for your components or pages to indicate
        something may still be loading.
      </p>

      <Placeholder as='p' animation='glow'>
        <Placeholder xs={6} aria-hidden='true' />
      </Placeholder>

      <Placeholder as='p' animation='wave'>
        <Placeholder.Button xs={4} aria-hidden='true' />
      </Placeholder>
    </>
  )
}
