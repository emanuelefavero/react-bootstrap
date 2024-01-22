import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function TablesPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Tables</h1>
      <p>Use the striped, bordered and hover props to customize the table.</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{1}</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>{2}</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>{3}</td>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
