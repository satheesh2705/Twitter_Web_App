import React from 'react'
import { IoSearch } from "react-icons/io5"; 
import { IoSettingsSharp } from "react-icons/io5";
// import Post from '../Componants/Post'
import { NavLink, Outlet } from 'react-router-dom';

const Explore = () => {
   
  return (
    <div className='Explore'>
       <div className='ExploreHeader'>
          <div className='ExploreSearchBox'>
              <IoSearch />
              <input type="text" placeholder='Search' />
          </div>
          <span>
            <IoSettingsSharp />
          </span>
       </div>
       <div className="ExploreNav">
          <NavLink id='ExploreNavLink' to='foryou' > <p>For You</p></NavLink>
          <NavLink id='ExploreNavLink' to='trendings' > <p>Trendings</p></NavLink>
          <NavLink id='ExploreNavLink' to='news'> <p>News</p></NavLink>
          <NavLink id='ExploreNavLink' to='sports' > <p>Sports</p></NavLink> 
          <NavLink id='ExploreNavLink' to='entertainments' > <p>Entertainments</p></NavLink>
       </div>
       <Outlet />
    </div>
  )
}

export default Explore
