import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip, { TooltipProps } from 'react-bootstrap/Tooltip'

export default function OverlayPage() {
  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id='button-tooltip' {...props}>
      Simple tooltip
    </Tooltip>
  )

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Overlay</h1>
      <p>
        A set of components for positioning beautiful overlays, tooltips,
        popovers, and anything else you need.
      </p>

      <OverlayTrigger
        placement='right'
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant='secondary'>Hover me to see</Button>
      </OverlayTrigger>
    </>
  )
}
