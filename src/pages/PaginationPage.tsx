import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination'

export default function PaginationPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Pagination</h1>
      <p>A set of presentational components for building pagination UI.</p>

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item disabled>{13}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  )
}
