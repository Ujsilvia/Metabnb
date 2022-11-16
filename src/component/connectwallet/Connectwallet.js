import React from 'react'
import './Connectwallet.css';
import dogicon from '../../images/dogicon.svg';
import connectionicon from '../../images/connecticon.svg';


const Connectwallet = ({setToggleOpen}) => {
  return ( 
        (
            <div className='overlay'>
                <div className="overlay__background">
                    <div className="overlay__container">
                        <div className="overlay__controls">
                            <h1>Connect Wallet</h1>
                            <button
                                className="overlay__close"
                                type="button"
                                onClick={()=>setToggleOpen(false)}
                            ></button>
                        </div>
                        <div className='overlay__children'>
                            <p>Connect your preferred wallet</p>
                            <div id = "metamask">
                                <div className='wallet'>
                                    <img src = {dogicon} alt = "dogicon" />
                                    <p>MetaMask</p>
                                </div>
                                <div className='wallet-select'>
                                    <p>{'>'}</p>
                                </div>
                            </div>
                            <div>
                                <div className='wallet'>
                                    <img src = {connectionicon} alt = "connectionicon" />
                                    <p>WalletConnect</p>
                                </div>
                                <div className='wallet-select'>
                                    <p>{'>'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  )
}
export default Connectwallet;




