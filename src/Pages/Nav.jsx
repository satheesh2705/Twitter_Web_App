import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5"; 
import { MdNotificationsNone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbPremiumRights } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import ajith from '../Assets/ajith.jpeg'
import Recommends from '../Componants/Recomends';

const Nav = () => {
  return (
    <div className="parantNav">
        <nav className="Nav">
        <div className='NavBar'>
            <ul>
                <h1>This is Mr</h1>
                <NavLink className="link" to='home'>  <li>  <GoHome /> <p>Home</p></li> </NavLink>
                <NavLink className="link" to='explore'>  <li> <IoSearch /> <p>Explore</p></li></NavLink>
                <NavLink className="link" to='notification'> <li> <MdNotificationsNone /> <p>notification</p></li></NavLink>
                <NavLink className="link" to='message'> <li> <CiMail /> <p>Message</p></li></NavLink>
                <NavLink className="link" > <li> <CiViewList /> <p>List</p></li> </NavLink>
                <NavLink className="link" > <li> <FaRegBookmark /> <p>bookmarks</p> </li>  </NavLink>
                <NavLink className="link" to='communities'>  <li> <AiOutlineUsergroupAdd /> <p>communities</p></li> </NavLink> 
                <NavLink className="link" to='premium'>  <li> <TbPremiumRights /> <p>premium</p></li></NavLink>
                <NavLink className="link" to='profile'> <li> <CgProfile /> <p>profile</p></li> </NavLink>
                <NavLink className="link"> <li> <CiCircleMore /> <p>more</p></li>  </NavLink>                       
            </ul>               
        </div>    
        <div className="PostBox">
        <button id='PostBtn'>Post</button>
        </div>

        <div className='Nav-Foot'>
            <img src={ajith} alt="profile" />
            <div>
                <h3>SATHEESH S</h3>
                <p>@mrsatheesh2705</p>
            </div>
            <p>...</p>
        </div>
    </nav>
    
    {/*  ================================= */}

     <Outlet /> 

       {/*=========================  */}
      <div className='RecommendsBox'>
        <div className='RecomendedUser'>
          <h2> Who to follow </h2>
            <Recommends />
            <Recommends />
            {/*<Recommends />
            <Recommends />
            <Recommends />
            <Recommends />
            <Recommends />
            <Recommends /> */}
        </div>
        <div className='RecommendsBoxFooter'>
            <div>
              <p>Terms of service</p>
              <p>privacy policy</p>
              <p>cookie policy</p>
            </div>
            <div>
              <p>Accessibility</p>
              <p>ads info</p>
              <p>more...</p>
              <p>2024 x crop</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
