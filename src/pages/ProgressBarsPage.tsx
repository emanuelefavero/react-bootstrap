import { Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function ProgressBarsPage() {
  const now = 60
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Progress bars</h1>
      <p>
        Provide up-to-date feedback on the progress of a workflow or action with
        simple yet flexible progress bars.
      </p>

      <ProgressBar now={now} label={`${now}%`} />
      <br />
      <ProgressBar
        now={now}
        label={`${now}%`}
        visuallyHidden
        variant='info'
        striped
        animated
      />
      <br />
      <ProgressBar>
        <ProgressBar striped variant='success' now={35} key={1} />
        <ProgressBar variant='warning' now={20} key={2} />
        <ProgressBar striped variant='danger' now={10} key={3} />
      </ProgressBar>
    </>
  )
}
