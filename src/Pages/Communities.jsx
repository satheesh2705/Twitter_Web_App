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
        <NavLink className=''>  <p>Sports</p>      </NavLink>
        <NavLink>  <p>Tech</p>        </NavLink>
        <NavLink>  <p>EnterTainment</p> </NavLink>
        <NavLink>  <p>Art</p>         </NavLink>
        <NavLink>  <p>News</p>        </NavLink>
        <NavLink>  <p>Games</p>       </NavLink>
        <NavLink>  <p>Animal </p>     </NavLink>        
        <NavLink>  <p>Food</p>        </NavLink> 
        <NavLink>  <p>X-official</p>  </NavLink> 
        <NavLink>  <p>politics</p>    </NavLink>  
      </div>
    </div>
  )
}

export default Communities
