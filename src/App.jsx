import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { SciNavbar } from './components/SciNavbar'
import SciFooter from './components/SciFooter'
import About from './pages/About'
import Ranking from './pages/Ranking'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ComingSoon from './components/comingSoon'

const queryClient = new QueryClient()

const App = () => {

  if(new Date() < new Date('2025-03-16T06:30:00.000Z')){
    return <ComingSoon/>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-gray-50'>
        <div className='min-h-screen max-w-screen-lg mx-auto flex flex-col justify-between'>
          <Router>
            <div className='sticky top-0 z-50 w-full'><SciNavbar /></div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/rankings' element={<Ranking />} />
              </Routes>
            <div className='w-full mx-auto'><SciFooter /></div>
          </Router>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App