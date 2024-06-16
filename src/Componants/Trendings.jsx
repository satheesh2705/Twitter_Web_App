import React from 'react'
import '../css/Explore.css'
import { TfiMoreAlt } from "react-icons/tfi";

const Trendings = () => {
  return (
    <div className='Trendings'>
        <h1>India Trends</h1>
        <div className='TrendingTwits'>
            <div className='TrendingTwitsDetails'>
              <p>1 - Trending</p>
              <h3>mrblack03</h3>
              <p>253k posts</p>
            </div>
            <div>
              <p>
              <TfiMoreAlt />
             </p>
            </div>
        </div>
        
    </div>
  )
}

export default Trendings
