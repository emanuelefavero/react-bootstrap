import { Link } from 'react-router-dom'

export default function ServerSideRenderingPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Server-side Rendering</h1>
      <p>
        In server-side rendered applications, a SSRProvider must wrap the
        application in order to ensure that the React-Bootstrap auto-generated
        ids are consistent between the server and client
        <code>
          {`
            import SSRProvider from 'react-bootstrap/SSRProvider'

            <SSRProvider>
              <App />
            </SSRProvider>
          `}
        </code>
      </p>
    </>
  )
}
