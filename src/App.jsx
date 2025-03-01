import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { SciNavbar } from './components/SciNavbar'
import SciFooter from './components/SciFooter'
import About from './pages/About'
import Ranking from './pages/Ranking'

const App = () => {
  return (
    <div className='min-h-screen max-w-screen-lg mx-auto flex flex-col justify-between'>
      <Router>
        <div className='sticky top-0 z-50'><SciNavbar /></div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/ranking' element={<Ranking />} /> */}
          </Routes>
        <div className='w-full mx-auto'><SciFooter /></div>
      </Router>
    </div>
  )
}

export default App