import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom';
import '../css/Premium.css';
import BasicPrize from '../Componants/PremiumPrizeList/BasicPrize';
import PremiumPrize from '../Componants/PremiumPrizeList/PremiumPrize';
import PremiumPlusPrize from '../Componants/PremiumPrizeList/PremiumPlusPrize';


const Premium = () => {
  return (
    <div className='Premium'>
          
        <div className='PremiumHeader'>
            <h1>Upgrade to premium</h1>
            <p>enjoy an enhanced experiance, exclusive creater tools, top-tier verification & security</p>
            <p>(For organization <Link id='GotoSignup'>SignUp here</Link>)</p>
        </div>
        <div className='PremiumPrizeList'>
            <div className='PremiumOption'>
              <div>
                 <p id='ShowPrize'>Annual</p>
                 <label>Best Value</label>
                 <p id='ShowPrize'>Monthly</p>
              </div>
            </div>
            <div className='PrizeTable'>
                <BasicPrize />
                <PremiumPrize />
                <PremiumPlusPrize />
            </div>
        </div>
    </div>
  )
}

export default Premium
