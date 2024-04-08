import { useState } from 'react'
import './App.css'
import Scoreboard from './Scoreboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scoreboard name="Scoreboard" />
    </>
  )
}

export default App
