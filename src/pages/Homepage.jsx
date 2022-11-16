import React, { useState } from 'react'
import Dashboard from '../component/dashboard/Dashboard'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
// import Middle from '../component/down/Down'
import Down from '../component/down/Down'
import Inspiration from '../component/inspiration/Inspiration'
import Footerdown  from '../component/footerdown/Footerdown'
// import { BrowserRouter as Router, Route, Routes,Link,NavLink } from "react-router-dom";
// import Placetostay from '../component/placetostay/Placetostay'
import Connectwallet from '../component/connectwallet/Connectwallet'

function Homepage() {
  const [toggleOpen, setToggleOpen] = useState(false)
     return (<div>
        <Header setToggleOpen={setToggleOpen} />
        <Dashboard />
        <Footer />
        <Inspiration/>
        <Down />
        <Footerdown />
        {toggleOpen && <Connectwallet setToggleOpen={setToggleOpen}/>}
      </div>)
}

export default Homepage
