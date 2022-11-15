import React from 'react'
import "./Inspiration.css";

const InspirationComponent = ({inspirationDetails}) => {
  return (
    <div className="inspireclass">
    <img src={inspirationDetails.img} alt="inspireone" />
    <div className="letters__inspire">
      <div className="letters__left">
        <p>{inspirationDetails.title}</p>
        <p>{inspirationDetails.location}</p>
      </div>
      <div className="letters__right">
        <p id='miniature__letter'>{inspirationDetails.speed}</p>
        <p>{inspirationDetails.period}</p>
      </div>
    </div>
    <img src={inspirationDetails.inspirestar} alt="inspirestar" />
  </div>
  )
}

export default InspirationComponent
