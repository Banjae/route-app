import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Songlist from './pages/Songlist'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <About />
      <Members />
      <Songlist />
    </div>
  )
}

export default App