import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function BreadcrumbsPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Breadcrumbs</h1>
      <p>
        Breadcrumbs are used to indicate the current page's location within a
        navigational hierarchy
      </p>

      {
        // TIP: active prop is used to indicate the current page's location without a link
      }

      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/breadcrumbs'>Breadcrumbs</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}
