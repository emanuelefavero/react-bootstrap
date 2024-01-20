import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

export default function BadgesPage() {
  return (
    <>
      <Link to='/'>Home</Link>

      {
        // TIP: Badges are used to highlight new or unread items. They scale to match the size of the immediate parent element by using relative font sizing and em units
        // TIP: pill makes the badge rounded
      }

      <h1>Badges</h1>
      <h2>
        Example
        <Badge bg='secondary'>badge</Badge>
      </h2>
      <h5>
        Example
        <Badge bg='success' pill>
          badge
        </Badge>
      </h5>
      <p>
        Example
        <Badge bg='warning'>badge</Badge>
      </p>
    </>
  )
}
