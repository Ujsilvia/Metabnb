import React from 'react';
import token from '../../images/mbtoken.svg';
import metamask from '../../images/metamask.svg';
import opensea from '../../images/opensea.svg';
import './Footer.css';


function Footer() {
  return (
    <div id='footer__icon'>
        <div id='token'> <img src={token} alt="token" />MBToken </div>
        <div id='meta__mask'> <img src={metamask} alt="metamask"/> METAMASK</div>
        <div id ='open__sea'> <img src={opensea} alt="opensea" />Opensea </div>
    </div>
  )
}

export default Footer;