import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='title'>Board Game Favorites</div>
      <Board />
    </div>
  )
}

export default App
