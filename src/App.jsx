import React from 'react'
import Navbar from './components/navbar/Navbar'
import Amenities from './sections/amenities'
import { Features } from './sections/Features'
import { Home } from './sections/Home'
import { Overview } from './sections/overview'
import Pricing from './sections/pricing'
import { MasterPlan } from './sections/Masterplan'
import { Location } from './sections/Location'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Overview />
      <Pricing />
      <MasterPlan />
      <Location />
      <Amenities />
    </div>
  )
}

export default App
