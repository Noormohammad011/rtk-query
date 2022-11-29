import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

const Main = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Main
