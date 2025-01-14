import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
