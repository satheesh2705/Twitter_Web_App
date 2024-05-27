import React from 'react'
import { IoSearch } from "react-icons/io5"; 
import { IoSettingsSharp } from "react-icons/io5";
import Post from '../Componants/Post'

const Explore = () => {

    function foryou(){
      document.getElementById('trending').style.display='block';
      document.getElementById('news').style.display='none';
      document.getElementsByClassName('Post').style='none'
    }

   
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
        <p onClick={foryou}>For You</p>
        <p>Trending</p>
        <p>News</p>
        <p>Sports</p>
        <p>Entertainment</p>
       </div>
       <div className='Posts'>
              <Post /> 
              <Post />
              <Post /> 
              <Post />           
          </div>
        <div id='trending'>
            <h1>this is trending twits</h1>
        </div>
        <div id='news'>
            <h1>thi is new related</h1>
        </div>
    </div>
  )
}

export default Explore
