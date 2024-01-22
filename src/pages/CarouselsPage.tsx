import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

export default function ButtonPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Carousels</h1>
      <p>
        A slideshow component for cycling through elements—images or slides of
        text—like a carousel.
      </p>

      {
        // TIP: Add the fade prop to animate slides with a fade transition instead of a slide. (<Carousel fade />)
        // TIP: Add slide={false} to disable slide animation. (<Carousel slide={false} />)
        // TIP: Add indicators={false} to hide slide indicators. (<Carousel indicators={false} />)
        // TIP: Add controls={false} to hide slide controls. (<Carousel controls={false} />)
        // TIP: Specify the interval at which slides change via the interval prop. (<Carousel interval={1000} />)
        // TIP: You can specify individual intervals for each carousel item via the interval prop. (<Carousel.Item interval={1000} />)
      }

      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://placehold.co/1920x1080/0A86D6/0A86D6'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://placehold.co/1920x1080/B814D8/B814D8'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
