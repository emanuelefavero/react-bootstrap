import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function ButtonPage() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.innerText)
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Button</h1>
      <p>
        Use Bootstrap's custom button styles for actions in forms, dialogs, and
        more with support for multiple sizes, states, and more.
      </p>

      <Button variant='primary' onClick={handleClick}>
        Button
      </Button>
      <Button variant='outline-danger' onClick={handleClick}>
        Outline Button
      </Button>

      {/* TIP: adding an href will convert the button to an a element */}
      <Button href='#' variant='info' onClick={handleClick}>
        "a" Button
      </Button>

      <Button type='submit' variant='warning' onClick={handleClick}>
        Submit Button
      </Button>

      <Button size='sm' variant='success' onClick={handleClick}>
        Small Button
      </Button>

      <Button disabled variant='secondary' onClick={handleClick}>
        Disabled Button
      </Button>

      <div className='d-grid gap-2'>
        <Button variant='primary' onClick={handleClick}>
          Block Button
        </Button>
      </div>
    </>
  )
}
