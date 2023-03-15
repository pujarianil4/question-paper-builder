import React from 'react'
import Navbar from '../Navbar'
import RoutesContainer from '../../routes'
import Signup from '../signup'
import Template1 from '../Templates/Template1'

export default function Container() {
  return (
    <div>
      <Navbar/>
    {/* <RoutesContainer /> */}
    <RoutesContainer />
        {/* <Template1/> */}
    </div>
  )
}
