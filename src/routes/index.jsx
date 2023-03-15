import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from '../components/signup';

export default function RoutesContainer() {
  return (
    <Routes>
      <Route path='/' element={<h1>Hello</h1>} />
        <Route exact={true} path='/signup' element={<Signup />} />
    </Routes>
  )
}
