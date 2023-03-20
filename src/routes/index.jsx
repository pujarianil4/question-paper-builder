import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import PaperInput from '../components/PaperInputs';
import Signup from '../components/signup';
import Steps from '../components/Steps';
import Template1 from '../components/Templates/Template1';

export default function RoutesContainer() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route exact={true} path='/signup' element={<Signup />} />
        <Route exact={true} path='/about' element={<h1>About</h1>} />
        <Route exact={true} path='/edit' element={<Template1 />} />
        <Route exact={true} path='/build' element={<PaperInput/>} />
    </Routes>
  )
}
