import React from 'react';
import nfimage from '../../images/nft.svg';
import './Down.css';


function Down() {
  return (
    <div id='down__imh'>
      <div id='down_info'>
      <h2 id='down__note'>Metabnb NFTs</h2>
      <p id='words__nft'> Discover our NFT gift cards collection. Loyal
        <br/>customers get amazing gift cards which are 
        <br/>traded as NFTs. These NFTs gives our customer 
        <br/>access to loads of our exclusive services. </p>
        <button id='learn__nft'>learn more</button>
        </div>


        <div id='nft__image'> <img src={nfimage} alt="nfimage" /> </div>
    </div>
  )
}

export default Down;