import React from  'react';
import house from  '../images/houseicon.svg';




function Header() {
    return (


        <div className="header">
            <img src={house} alt="house logo" />
           
            <div className='nav_menu'>
            <div>Home</div>
            <div>Place To Stay</div>
            <div>NFTs</div>
            <div>Community</div>
           </div>
           <button id='connect'>Connect Wallet</button>

          
      </div>
    );
  }

    
  
  export default Header;
