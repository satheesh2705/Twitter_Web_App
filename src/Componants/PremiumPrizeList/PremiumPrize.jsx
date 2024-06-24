import React from 'react'

const PremiumPrize = () => {
  return (
    <div className='PremiumPrize'>
     <div className='PrizeBox'>
       <h1>Premium</h1>
       <div className='PremiumAmount'>
          <h1>$566.35</h1>
          <p>/ month</p>
       </div>
       <div className='PremiumButton'>
          <button>Subscribe</button>
       </div>
       <div className='PremiumFeatures'>
         
           <h4>  Everything in Basic</h4> 
           <p> <span>&#10003;</span> Lorger Reply Boost </p> 
           <p> <span>&#10003;</span> Get paid to post </p>
           <p> <span>&#10003;</span> x- pro </p> 
           <p> <span>&#10003;</span>  check mark </p> 
           <p> <span>&#10003;</span>  Creater Subscription </p>
       </div>
       </div>
    </div>
  )
}

export default PremiumPrize
