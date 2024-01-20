import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'

export default function AccordionPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Accordion</h1>

      {
        // TIP: defaultActiveKey sets the default open accordion item
        // TIP: alwaysOpen keeps accordion items always open
        // TIP: flush removes the default bg color to headers when accordion items are closed
      }

      <Accordion defaultActiveKey={['0']} alwaysOpen flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Accordion Item 1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quos voluptatem, quae, quod quia iusto voluptatum
            dignissimos voluptas quibusdam voluptate. Quisquam, natus. Quisquam
            voluptates, quos voluptatem, quae, quod quia iusto voluptatum
            dignissimos voluptas quibusdam voluptate. Quisquam, natus.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Accordion Item 2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quos voluptatem, quae, quod quia iusto voluptatum
            dignissimos voluptas quibusdam voluptate. Quisquam, natus. Quisquam
            voluptates, quos voluptatem, quae, quod quia iusto voluptatum
            dignissimos voluptas quibusdam voluptate. Quisquam, natus.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
