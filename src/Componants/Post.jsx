import React from 'react'
import vijay from '../Assets/vijay.jpeg';
// import dhanush from '../Assets/dhanush.jpeg';
import { FiMoreHorizontal } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const Post = () => {
  return (
    <div className='Post'>
    <div className="PostHeader">
        <div className='PostHeader-Sec1'>
            <img src={vijay} alt={vijay} />
           <div className='postdet'>
                <div className="postName">
                  <p>Dhanush</p>
                  <p>@asuran</p>
                </div>
                <div className="postTime">
                  <p>12 . 00 pm</p>
                </div>
           </div>
        </div >
    <div className='PostHeader-Sec2'>
      <p><FiMoreHorizontal /></p>
    </div>
        </div>
     <div className='aboutpost'>
       <p>this is my fav hero and i like this hero av hero and </p>
      </div>

    <div className="PostBody">
      <img src={vijay} alt="body" />
    </div>

    <div className="PostFooter">
        <span><BiLike    className='buttons'/> <p>717</p></span>
        <span><BiDislike className='buttons'/> <p>71</p></span>
        <span><FaShare   className='buttons'/> <p>65</p></span>
        <span><FaRegCommentDots      className='buttons' /> <p>52</p></span>
        <span><MdOutlineFileDownload className='buttons' /><p>11</p></span>
    </div>
</div>
  )
}

export default Post
