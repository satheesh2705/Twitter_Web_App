import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5"; 
import { MdNotificationsNone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
// import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbPremiumRights } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import ajith from '../Assets/ajith.jpeg'

const Nav = () => {
  return (
    <div className="parantNav">
        <nav className="Nav">
        <div className='NavBar'>
            <ul>
                <h1>This is Mr</h1>
                <NavLink className="link" to='home'>  <li>  <GoHome /> <p>Home</p></li> </NavLink>
                <Link className="link">  <li> <IoSearch /> <p>Explore</p></li></Link>
                <Link className="link"> <li> <MdNotificationsNone /> <p>notification</p></li></Link>
                <Link className="link"> <li> <CiMail /> <p>Message</p></li></Link>
                <Link className="link" > <li> <CiViewList /> <p>List</p></li> </Link>
                {/* <li> <FaRegBookmark /> <p>bookmarks</p> </li>  */}
                <Link className="link">  <li> <AiOutlineUsergroupAdd /> <p>communities</p></li> </Link> 
                <Link className="link">  <li> <TbPremiumRights /> <p>premium</p></li></Link>
                <NavLink className="link" to='profile'> <li> <CgProfile /> <p>profile</p></li> </NavLink>
                <Link className="link"> <li> <CiCircleMore /> <p>more</p></li>  </Link>                       
            </ul>               
        </div>    
        <div className="PostBox">
        <button id='PostBtn'>Post</button>
        </div>

        <div className='Nav-Foot'>
            <img src={ajith} alt="hello" />
            <div>
                <h3>SATHEESH S</h3>
                <p>@mrsatheesh2705</p>
            </div>
            <p>...</p>
        </div>
    </nav>
     <Outlet /> 
    </div>
  )
}

export default Nav
