import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero   />
    <Services />  
    </>
  )
}

export default App
