import React from 'react';
// import Footer from './Footer';
import token from '../images/mbtoken.svg';
import metamask from '../images/metamask.svg';
import opensea from '../images/opensea.svg';


function Footer() {
  return (
    <div>
        <div id='token'> <img src={token} alt="token" />MBToken </div>
        <div id='meta__mask'> <img src={metamask} alt="metamask"/> METAMASK</div>
        <div id ='open__sea'> <img src={opensea} alt="opensea" />Opensea </div>
    </div>
  )
}

export default Footer;