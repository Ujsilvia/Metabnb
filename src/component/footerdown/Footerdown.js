import React from "react";
import "./Footerdown.css";
import metabnbdown from "../../images/metabnbdown.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import copyright from "../../images/copyright.svg";

function Footerdown() {
  return (
    <div id="footerdown">
      {/* Meta */} 
        <div id="metabnb__down">
          <img src={metabnbdown} alt="metabnbdown" />

        <div id="socials">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <div id="copyright__down">
        &copy; 2022 Metabnb.
          {/* <img src={copyright} alt="copyright" />{" "} */}
        </div>
      </div>

      {/* Community */}
      <div id="community">
        <h4 id='community__footer'>Community</h4>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>

      {/* Places */}
      <div id="places">
        <h4 id='places__styling'>Places</h4>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>

      {/* About us */}
      <div id="aboutus">
        <h4 id='about__us'>About us</h4>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </div>
    </div>
  );
}

export default Footerdown;
