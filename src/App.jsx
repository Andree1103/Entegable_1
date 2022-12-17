import { useState } from 'react'
import './App.css'
import Quotes from './componets/Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Quotes/>
    </div>
  )
}

export default App
