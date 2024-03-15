import { useState } from 'react'
import './App.css'
import StartGame  from './components/startGame'

function App() {
  const [score, setscore] = useState(0)

  return (
    <div>
      <StartGame image="" alt=""/>
    </div>
  )
}

export default App
