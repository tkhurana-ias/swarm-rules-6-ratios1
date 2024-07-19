import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Ratio1 from './Ratio1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Ratio1 />
      </div>
    </>
  )
}

export default App
