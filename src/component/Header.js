import React from  'react';
import house from  '../images/houseicon.svg';




function Header() {
    return (

        <div className="header">

            <div className='house__icon'>
            <img src={house} alt="house logo" />
            <div>Home</div>
            <div>Place To Stay</div>
            <div>NFTs</div>
            <div>Community</div>
            <div id= 'connect'>Connect Wallet</div>
           </div>

      
      </div>
    );
  }

    
  
  export default Header;
