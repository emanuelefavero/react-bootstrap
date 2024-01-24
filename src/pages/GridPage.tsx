import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Grid() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Grid</h1>
      <p>
        Bootstrap's grid system uses a series of containers, rows, and columns
        to layout and align content. It's built with flexbox and is fully
        responsive.
      </p>

      <style type='text/css'>
        {`
          .box {
            background-color: rgba(238, 0, 238, 0.2);
            border: 1px solid #909;
            padding: 1rem;
          }
        `}
      </style>

      {
        // TIP: There are 12 columns in a row
        // TIP: You can use the 'fluid' prop to make the container full-width
        // TIP: You can use the 'xs', 'sm', 'md', 'lg', 'xl' props make the column responsive
        // TIP: You can use the 'auto' prop to make the column take up the width of its content
        // TIP: Use 'xs={12}' to make the column take the full width of the row
      }

      <Container fluid>
        <Row>
          <Col className='box'>One</Col>
          <Col xs={6} md='auto' className='box'>
            Two
          </Col>
          <Col className='box'>Three</Col>
        </Row>
        <Row>
          <Col className='box'>Four</Col>
          <Col className='box'>Five</Col>
        </Row>
      </Container>
    </>
  )
}
