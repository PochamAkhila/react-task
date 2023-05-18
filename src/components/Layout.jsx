import React from 'react'
import PrimaryNavbar from './PrimaryNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div>
        <PrimaryNavbar />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default Layout