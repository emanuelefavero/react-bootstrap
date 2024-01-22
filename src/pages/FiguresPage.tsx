import { Link } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'

export default function FiguresPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Figures</h1>
      <p>Displaying related images and text with the Figure component.</p>

      <Figure>
        <Figure.Image
          width={250}
          height={180}
          alt='250x180'
          src='https://placehold.co/250x180'
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </>
  )
}
