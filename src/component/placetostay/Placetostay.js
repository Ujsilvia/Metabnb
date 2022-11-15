import React from 'react';
import Footerdown from '../footerdown/Footerdown';
import Header from '../header/Header';
import Placetostayheader from '../placetostayheader/Placetostayheader';
import './Placetostay.css';
import  ptsimageone from '../../images/ptsimageone.svg';
import  ptsimagetwo from '../../images/ptsimagetwo.svg';
import  ptsimagethree from '../../images/ptsimagethree.svg';
import  ptsimagefour from '../../images/ptsimagefour.svg';
import  ptsimagefive from '../../images/ptsimagefive.svg';
import  ptsimagesix from '../../images/ptsimagesix.svg';
import  ptsimageseven from '../../images/ptsimageseven.svg';
import  ptsimageeight from '../../images/ptsimageeight.svg';
import  ptsimagenine from '../../images/ptsimagenine.svg';
import  ptsimageten from '../../images/ptsimageten.svg';
import  ptsimageeleven from '../../images/ptsimageeleven.svg';
import  ptsimagetwelve from '../../images/ptsimagetwelve.svg';
import  ptsimagethirteen from '../../images/ptsimagethirteen.svg';
import  ptsimagefourteen from '../../images/ptsimagefourteen.svg';
import  ptsimagefifteen from '../../images/ptsimagefifteen.svg';
import  ptsimagesixteen from '../../images/ptsimagesixteen.svg';
import inspirestar from '../../images/inspirestar.svg';
import InspirationComponent from '../inspiration/InspirationComponent';



function Placetostay() {
  const inspirationDetails=[
    {
      img: ptsimageone,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagetwo,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagethree,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagefour,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagefive,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagesix,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimageseven,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimageeight,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagenine,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimageten,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimageeleven,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagetwelve,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagethirteen,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagefourteen,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagefifteen,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: ptsimagesixteen,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
  ]
  return (
    <>
        <Header />
        <Placetostayheader/>
        <div id="placetostay__container">
     {inspirationDetails.map((data,index)=>(
       <InspirationComponent key={index} inspirationDetails={data} />  
     )) }
      </div>


         {/* <div>
         <div className="inspireclass">
         <img src={ptsimageone} alt="ptsimageone" />
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
        <img src={ptsimagetwo} alt="ptsimagetwo"/>
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
        <img src={ptsimagethree} alt="ptsimagethree"/>
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
          <img src={ptsimagefour} alt="ptsimagefour" />
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
        <img src={ptsimagefive} alt="ptsimagefive"/>
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
        <img src={ptsimagesix} alt="ptsimagesix" />
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
        <img src={ptsimageseven} alt="ptsimageseven" />
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
        <img src={ptsimageeight} alt="ptsimageeight" />
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
        <img src={ptsimagenine} alt="ptsimagenine" />
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
        <img src={ptsimageten} alt="ptsimageten" />
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
        <img src={ptsimageeleven} alt="ptsimageeleven" />
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
        <img src={ptsimagetwelve} alt="ptsimagetwelve" />
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
        <img src={ptsimagethirteen} alt="ptsimagethirteen" />
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
        <img src={ptsimagefourteen} alt="ptsimagefourteen" />
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
        <img src={ptsimagefifteen} alt="ptsimagefifteen" />
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
        <img src={ptsimagesixteen} alt="ptsimagesixteen" />
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
          

          
        
         </div> */}

        <Footerdown />

    </>
   
  )
}

export default Placetostay;