import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Owners from './components/Owners'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Owners/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
