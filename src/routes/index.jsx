import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Signup from '../components/signup';

export default function RoutesContainer() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route exact={true} path='/signup' element={<Signup />} />
        <Route exact={true} path='/about' element={<h1>About</h1>} />
    </Routes>
  )
}
