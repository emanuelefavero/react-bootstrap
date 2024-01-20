import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const [bgColor, setBgColor] = useState('primary')

  const handleButtonClick = () => {
    if (bgColor === 'primary') {
      setBgColor('danger')
    } else {
      setBgColor('primary')
    }
  }

  return (
    <>
      <h1>Home</h1>
      <Link to='/about'>About</Link>
      <br />
      <Button variant={bgColor} onClick={handleButtonClick}>
        Primary
      </Button>
    </>
  )
}
