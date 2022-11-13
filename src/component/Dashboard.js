import React from 'react';
import group from '../images/group.svg';



function Dashboard(){
  return (
    <div>

      <h1>Rent a <span>Place</span>away from<br> <span>Home</span></br>in the <span>Metaverse</span></h1> 
      <div>
        <p>we provide you access to luxury and affordable houses<br>in the metaverse,get a chance to turn your </br> imagination to reality at your comfort zone</p>
        </div> 
    
    <div> 
    <img src={group} alt="group" />
    </div> 
   
    </div>
  )
}

export default Dashboard;