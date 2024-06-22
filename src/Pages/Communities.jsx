import React from 'react'
import { NavLink, Outlet, Link  } from 'react-router-dom';
import '../css/Communities.css';
import { IoArrowBack } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Communities = () => {
  return (
    <div className='Communities'>
      <div className='CommunitiesHeader'>
          <div>
            <Link id='BackButton'> <IoArrowBack /> </Link> 
            <p>Communities</p>
          </div>
          <IoSearch />
      </div>
      <div className='CommunitiesNavList'>
        <NavLink to='tech' className='CommunitiesNavBar' >  <p>Tech</p>        </NavLink>
        <NavLink to='art' className='CommunitiesNavBar' >  <p>Art</p>         </NavLink>
        <NavLink to='games' className='CommunitiesNavBar' >  <p>Games</p>       </NavLink>
        <NavLink to='animals' className='CommunitiesNavBar' >  <p>Animal </p>     </NavLink>        
        <NavLink to='food' className='CommunitiesNavBar' >  <p>Food</p>        </NavLink> 
        <NavLink to='politics' className='CommunitiesNavBar' >  <p>politics</p>    </NavLink>
        <NavLink to='travel' className='CommunitiesNavBar' >  <p>travel</p>    </NavLink> 
        <NavLink to='xofficial' className='CommunitiesNavBar' >  <p>Xofficial</p>   </NavLink>  
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Communities
