import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function CardsPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Cards</h1>
      <p>
        Bootstrap's cards provide a flexible and extensible content container
        with multiple variants and options.
      </p>

      {
        // TIP: Change card colors by adding text, bg and border props
      }

      <Card bg='light' text='dark' border='dark' style={{ width: '18rem' }}>
        <Card.Img variant='top' src='https://placehold.co/1920x1080' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit <Card.Link href='#'>amet</Card.Link>{' '}
            consectetur adipisicing elit. Sapiente eum perferendis cupiditate
            eos dolorum! Nihil.
          </Card.Text>
          <Button href='#' variant='primary'>
            Button
          </Button>
        </Card.Body>
      </Card>

      {
        // * IMAGE OVERLAYS (use image as card bg color)
      }
      <Card className='text-white' style={{ width: '18rem' }}>
        <Card.Img src='https://placehold.co/280x240/000/fff' alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit <Card.Link href='#'>amet</Card.Link>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}
