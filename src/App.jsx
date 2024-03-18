import { useState } from 'react'
import StartGame  from './components/startGame'
import GlowingWaldo from './components/glowingWaldo'

function App() {
  const [score, setscore] = useState(0)

  return (
    <div>
      <GlowingWaldo classList='svgGlow' w='200' h='200' />
      <StartGame />
    </div>
  )
}

export default App
