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
import InspirationComponent from "./InspirationComponent"

function Inspiration() {
  const inspirationDetails=[
    {
      img: inspireone,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspiretwo,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspirethree,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspirefour,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspirefive,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspiresix,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspireseven,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
    {
      img: inspireeight,
      title: "Desert King",
      location: "2345km away",
      speed: "1MBT per night",
      period: "available for 2weeks stay",
      inspirestar
    },
  ]
  return (
    <div id="inspireWrapper">
      <div>
        <h1 id="inspire">Inspiration for your next adventure</h1>
      </div>
      
      <div id="inspire__container">
     {inspirationDetails.map((data,index)=>(
       <InspirationComponent key={index} inspirationDetails={data} />  
     )) }
      </div>
    </div>
  );
}

export default Inspiration;
