import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
    </>
  )
}

export default App
