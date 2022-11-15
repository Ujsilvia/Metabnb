import React from  'react';
import house from  '../../images/houseicon.svg';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate();

  const handlePlaceToStay = () => {
    navigate('/place-to-stay');
  }

    return (
        <div className="header">
            <img src={house} alt="house logo" />
           
            <div className='nav_menu'>
              <div><Link to="/">Home</Link></div>
              <div onClick={handlePlaceToStay}>Place To Stay</div>
              <div>NFTs</div>
              <div>Community</div>
           </div>
           
           <button id='connect'>Connect Wallet</button>

          
      </div>
    );
  }

    
  
  export default Header;
