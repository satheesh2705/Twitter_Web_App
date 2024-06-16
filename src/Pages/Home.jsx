import React from 'react'
import '../css/home.css';
import { IoSettingsSharp } from "react-icons/io5";  
import Post from '../Componants/Post';

// import {Post} from '../Componants/Post';

const Home = () => {
  return (
    <div className='Home'>
        <div className='nav'>
          <div className='navHead'>
              <p>For You</p>
              <p>Following</p>
          </div>          
          <div className='navIcon'>
              <p>
                <IoSettingsSharp />
              </p>
          </div>
        </div>
          <div className='Posts'>
              <Post /> 
              <Post />
              <Post /> 
              <Post />           
          </div>
    </div>
  )
}

export default Home
