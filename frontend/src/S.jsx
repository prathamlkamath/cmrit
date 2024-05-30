import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function S() {
  return (
    <div>
       <NavBar/>
  
    <Outlet/>
     </div>
  )
}

export default S