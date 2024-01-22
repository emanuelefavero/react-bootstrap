import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

export default function ImagesPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Images</h1>

      {
        // TIP: alt is recommended for accessibility
        // TIP: You can use fluid prop to make the image responsive (e.g. <Image src='https://placehold.co/250x180' fluid />)
      }

      <Image src='https://placehold.co/250x180' alt='placeholder' />
      <Image src='https://placehold.co/250x180' roundedCircle />
      <Image src='https://placehold.co/250x180' rounded />
      <Image src='https://placehold.co/250x180' thumbnail />
    </>
  )
}
