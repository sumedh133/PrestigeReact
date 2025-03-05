import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Features } from './sections/Features'
import { Home } from './sections/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
    </div>
  )
}

export default App
