import React, { useEffect, useState } from  'react';
import house from  '../../images/houseicon.svg';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';


function Header({setToggleOpen}) {
  const navigate = useNavigate();

  const handlePlaceToStay = () => {
    navigate('/place-to-stay');
  }
const [toggleNav, setToggleNav] = useState(true);
const [width, setWidth] = useState(window.innerWidth);

const handleWindowSizeChange = () => {
  setWidth(window.innerWidth);
  if(width < 768){
    setToggleNav(true);
}
}

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  window.addEventListener('resize', handleWindowSizeChange);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [width]);

    return (
        <div className="header">
            <img src={house} alt="house logo"  />
            <button className='hambugerIcon' onClick={()=>setToggleNav(!toggleNav)}>
            <GiHamburgerMenu />
          </button>
            <div className='up_nav_wrapper' style={{display:toggleNav?"flex":"none"}}>
            <div className='nav_menu'>
              <div><Link to="/">Home</Link></div>
              <div onClick={handlePlaceToStay}>Place To Stay</div>
              <div>NFTs</div>
              <div>Community</div>
           </div>
           <button style={{cursor:"pointer"}} onClick={()=>setToggleOpen(true)} id='connect'>Connect Wallet</button>
           </div>

          
      </div>
    );
  }

    
  
  export default Header;
