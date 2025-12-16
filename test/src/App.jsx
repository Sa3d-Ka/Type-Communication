import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'

function App() {


  return (
    <BrowserRouter>
      <nav className='flex justify-center bg-gray-200 p-5'>
        <div className='space-x-10'>
          <Link to='/page-1' className='underline hover:text-blue-500' >Page 1</Link>
          <Link to='/page-2' className='underline hover:text-blue-500' >Page 2</Link>
          <Link to='/page-3' className='underline hover:text-blue-500' >Page 3</Link>
          <Link to='/page-4' className='underline hover:text-blue-500' >Page 4</Link>
          <Link to='/page-5' className='underline hover:text-blue-500' >Page 5</Link>
        </div>
      </nav>



      <Routes>
        <Route path='/page-1' element={<Page1 />} />
        <Route path='/page-2' element={<Page2 />} />
        <Route path='/page-3' element={<Page3 />} />
        <Route path='/page-4' element={<Page4 />} />
        <Route path='/page-5' element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
