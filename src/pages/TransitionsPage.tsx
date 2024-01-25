import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// * IMPORT TRANSITIONS
import Collapse from 'react-bootstrap/Collapse'
import Fade from 'react-bootstrap/Fade'

export default function TransitionsPage() {
  const [openVertical, setOpenVertical] = useState(false)
  const [openHorizontal, setOpenHorizontal] = useState(false)
  const [openFade, setOpenFade] = useState(false)

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Transitions</h1>
      <p>
        Bootstrap includes a few general use CSS transitions that can be applied
        to a number of components. React Bootstrap, bundles them up into a few
        composable <code>{`<Transition>`}</code> components from
        react-transition-group, a commonly used animation wrapper for React.
      </p>

      <h2>Collapse</h2>
      <h4>Open Vertical</h4>
      <Button
        onClick={() => setOpenVertical(!openVertical)}
        aria-controls='example-collapse-text'
        aria-expanded={openVertical}
      >
        click
      </Button>
      <Collapse in={openVertical} className='bg-dark text-white'>
        <div id='example-collapse-text-v'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>

      <h4>Open Horizontal</h4>
      <Button
        onClick={() => setOpenHorizontal(!openHorizontal)}
        aria-controls='example-collapse-text'
        aria-expanded={openHorizontal}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={openHorizontal} dimension='width'>
          <div id='example-collapse-text-h'>
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>

      <h2>Fade</h2>
      <Button
        onClick={() => setOpenFade(!openFade)}
        aria-controls='example-fade-text'
        aria-expanded={openFade}
      >
        Toggle text
      </Button>
      <Fade in={openFade} className='bg-info text-white'>
        <div id='example-fade-text'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
    </>
  )
}
