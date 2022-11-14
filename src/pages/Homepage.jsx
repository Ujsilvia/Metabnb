import React from 'react'
import Dashboard from '../component/dashboard/Dashboard'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Middle from '../component/down/Down'
import Down from '../component/down/Down'
import Inspiration from '../component/inspiration/Inspiration'
import Footerdown  from '../component/footerdown/Footerdown'

const Homepage = () => (
  <div>
    <Header />
    <Dashboard />
    <Footer />
    <Inspiration/>
    <Down />
    <Footerdown />
  </div>
)

export default Homepage
