import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BreadcrumbsPage() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.innerText)
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Button group</h1>
      <p>
        Button groups allow multiple buttons to be stacked together on a single
        line
      </p>

      {
        // TIP: aria-label is used to provide a label that describes the button group
        // TIP: You can use 'size' prop to change the size of the button group (e.g. size='lg', size='sm')
        // TIP: You can use 'vertical' prop to stack buttons vertically
      }

      <ButtonGroup aria-label='basic-example'>
        <Button variant='primary' onClick={handleClick}>
          Left
        </Button>
        <Button variant='primary' onClick={handleClick}>
          Middle
        </Button>
        <Button variant='primary' onClick={handleClick}>
          Right
        </Button>
      </ButtonGroup>
    </>
  )
}
