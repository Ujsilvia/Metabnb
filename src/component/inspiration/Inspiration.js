import React from "react";
import "./Inspiration.css";
import inspireone from "../../images/inspireone.svg";
import inspiretwo from "../../images/inspiretwo.svg";
import inspirethree from "../../images/inspirethree.svg";
import inspirefour from "../../images/inspirefour.svg";
import inspirefive from "../../images/inspirefive.svg";
import inspiresix from "../../images/inspiresix.svg";
import inspireseven from "../../images/inspireseven.svg";
import inspireeight from "../../images/inspireeight.svg";
import inspirestar from "../../images/inspirestar.svg";

function Inspiration() {
  return (
    <div id="inspireWrapper">
      <div>
        <h1 id="inspire">Inspiration for your next adventure</h1>
      </div>
      <div id="inspire__container">
        <div className="inspireclass">
          <img src={inspireone} alt="inspireone" />
          <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
              <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>


        <div className="inspireclass">
          <img src={inspiretwo} alt="inspiretwo" />
          <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>


        <div className="inspireclass">
          <img src={inspirethree} alt="inspirethree" />
           <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>


        <div className="inspireclass">
          <img src={inspirefour} alt="inspirefour" />
           <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>


        <div className="inspireclass">
          <img src={inspirefive} alt="inspirefive" />
          <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>


        <div className="inspireclass">
          <img src={inspiresix} alt="inspiresix" />
          <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>


        <div className="inspireclass">
          <img src={inspireseven} alt="inspireseven" />
           <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>

        <div className="inspireclass">
          <img src={inspireeight} alt="inspireeight" />
          <div className="letters__inspire">
            <div className="letters__left">
              <p>Desert King</p>
              <p>2345km away</p>
            </div>
            <div className="letters__right">
            <p id='miniature__letter'>1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={inspirestar} alt="inspirestar" />
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
