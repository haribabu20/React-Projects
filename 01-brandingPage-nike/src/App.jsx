import { useState } from 'react'
import Menu from './components/Menu'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Hero/>
    </>
  )
}

export default App