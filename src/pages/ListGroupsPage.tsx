import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

export default function ListGroupsPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>List Groups</h1>
      <p>
        List groups are a flexible and powerful component for displaying a
        series of content. Modify and extend them to support just about any
        content within.
      </p>

      {
        // TIP: active prop is not required
      }

      <ListGroup as='ul'>
        <ListGroup.Item active as='li'>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item disabled as='li'>
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item as='li'>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      {
        // * NUMBERED LIST GROUP
      }

      <ListGroup as='ol' numbered>
        <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
      </ListGroup>

      {
        // * HORIZONTAL LIST GROUP
      }

      <ListGroup as='ul' horizontal>
        <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
      </ListGroup>
    </>
  )
}
