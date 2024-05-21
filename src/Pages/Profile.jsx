import React from 'react'
import banner from '../Assets/twitban.jpg'
import vijay from '../Assets/vijay.jpeg';
import { IoChevronBack } from "react-icons/io5";
import '../css/home.css';
import { IoLocationOutline } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className='Profile'>
        <div className="ProfileHeader">
          <div className='ProfileHeader-top'>
            <IoChevronBack id='back'/>
            <div className='ProfileHeader-Name'>
               <h3>SATHEESH</h3>
            <div>
              <p>56</p>
              <p>post</p>
            </div>
            </div>
          </div>
          <img src={banner} alt="" />
          <div className='ProfileBox'>
            <img src={vijay} alt="" />
            <div>
                <p>Edit Profile</p>
            </div>
          </div>
          <div className='ProfileDetails'>
            <h2>SATHEESH</h2>
            <p id='id'>@Mrsatheesh_2705</p>
            <p id='bio'>Note that the development build is not optimized.To create a production build, use npm run build.</p>
            <ul className='ul'>
              <li><span><IoLocationOutline /></span><p>KALLAKKURICHI</p></li>
              <li><span><FiLink /></span><p id='portfolio'>https://satheesh2705.com/</p></li>
              <li> <span><FaRegCalendarAlt /></span><p>27.05.2003</p></li>
            </ul>
            <div className='follow'>
              <p>71611</p>
              <label htmlFor="follower">Followers</label>
              <p>389</p>
              <label htmlFor="following">Following</label>
            </div>
          </div>
        </div>   
    </div>
  )
}

export default Profile
