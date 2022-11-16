import React, { useState } from 'react';
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
import Connectwallet from '../connectwallet/Connectwallet';



function Placetostay() {
  const [toggleOpen, setToggleOpen] = useState(false)

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
        <Header setToggleOpen={setToggleOpen}/>
        <Placetostayheader/>
        <div id="placetostay__container">
     {inspirationDetails.map((data,index)=>(
       <InspirationComponent key={index} inspirationDetails={data} />  
     )) }
      </div>

      {toggleOpen && <Connectwallet setToggleOpen={setToggleOpen}/>}

        
        <Footerdown />

    </>
   
  )
}

export default Placetostay;