import React from 'react'
import './summa.css';

const BasicPrize = () => {
  return (
    <div className='BasicPrize' >
       <div className='PrizeBox'>
       <p>Basic</p>
       <div className='PremiumAmount'>
          <h1>243.35</h1>
          <p>/ month</p>
       </div>
       <div className='PremiumButton'>
          <button>Subscribe</button>
       </div>
       <div className='PremiumFeatures'>
         <ul>
            <li> <span>&#10003;</span> <p> Small reply boost </p> </li>
            <li> <span>&#10003;</span> <p> Encrypted direct messages </p> </li>
            <li> <span>&#10003;</span>  <p> Bookmark folders </p></li>
            <li> <span>&#10003;</span> <p> Highlights tab </p> </li>
            <li> <span>&#10003;</span> <p> Edit post </p> </li>
            <li> <span>&#10003;</span> <p> Post longer videos </p></li>
            <li>  <span>&#10003;</span> <p> Longer posts </p></li>
             
          
           
          
          
         </ul>
       </div>
       </div>
    </div>
  )
}

export default BasicPrize
