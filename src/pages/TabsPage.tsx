import { Link } from 'react-router-dom'
import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function TabsPage() {
  const [key, setKey] = useState('home')

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Tabs</h1>
      <p>Dynamic tabbed interfaces</p>

      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => k && setKey(k)}
        className='mb-3'
      >
        <Tab eventKey='home' title='Home'>
          Tab content for Home
        </Tab>
        <Tab eventKey='profile' title='Profile'>
          Tab content for Profile
        </Tab>
        <Tab eventKey='contact' title='Contact' disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  )
}
