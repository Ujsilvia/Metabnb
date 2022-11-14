import React from 'react'
import Dashboard from '../component/dashboard/Dashboard'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Middle from '../component/down/Down'
import Down from '../component/down/Down'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Footer/>
      <Down/>
    </div>
  )
}

export default Homepage
