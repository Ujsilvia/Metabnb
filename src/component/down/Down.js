import React from 'react';
import nfimage from '../../images/nft.svg';
import './Down.css';


function Down() {
  return (
    <div id='down__imh'>
      <div> <img src={nfimage} alt="nfimage" /> </div>
      <div> <h1>Metabnb NFTs</h1></div>
      <div> <p>Discover our NFT gift cards collection. Loyal
        <br/>customers get amazing gift cards which are 
        <br/>traded as NFTs. These NFTs gives our customer 
        <br/>access to loads of our exclusive services </p> </div>
    </div>
  )
}

export default Down;