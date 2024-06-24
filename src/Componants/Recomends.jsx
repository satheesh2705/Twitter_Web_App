import React from 'react'
import  ajith from '../Assets/ajith.jpeg'
import '../css/home.css';

const Recomends = () => {
  return (
    <div className='Recommends'>
     <div className='UserStart'>
        <img src={ajith} alt="" />
        <div>
            <h4>Manikikbasha</h4>
            <p>@manikandan</p>    
        </div>
      </div>
          <button id='FollowButton'>Follow</button>    
    </div>
  )
}

export default Recomends
