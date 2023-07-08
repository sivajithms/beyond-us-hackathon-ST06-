import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/login'
import Signup from './components/signup/Signup'
import Excel from './components/excel'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Excel />} />
      </Routes>
    </>
  )
}

export default App
