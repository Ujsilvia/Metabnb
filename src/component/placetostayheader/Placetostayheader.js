import React from 'react';
import './Placetostayheader.css';
import locationicon from '../../images/locationicon.svg';

function Placetostayheader() {
  return (
    <div className='header__pts'>
      
          <div>Restaurant</div>
          <div>Cottage</div>
          <div>Castle</div>
          <div>fantasy city</div>
          <div>beach</div>
          <div>Carbins</div>
          <div>Off-grid</div>
          <div>Farm</div>
        
          <div>
            <button id='location__btn'><label>Location</label> <img src={locationicon } alt="settings"/></button>
            </div>


    </div>

  )
}

export default Placetostayheader