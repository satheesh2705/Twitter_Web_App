import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Communities.css'
const BookMarks = () => {
  return (
    <div className='BookMarks'>
        <div className="BookMarksHeader">
            <h3>BookedPosts</h3>
             <Link id='UserId'><p>@Mr_satheesh2705</p> </Link>
        </div>
        <div className='BooKMarkBody'>
            <div>

            </div>
            <div className='NoPostMassage'>
                <h1>Sorry..</h1>
                <p>You didn't save any posts</p>
            </div>
        </div>
    </div>
  )
}

export default BookMarks
