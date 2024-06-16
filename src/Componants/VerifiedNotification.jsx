import React from 'react'
import vijay from '../Assets/vijay.jpeg';

const VerifiedNotification = () => {
  return (
      <div className='VerifiedNotification'>
          <div className='MessageBody'>
          <img src={vijay} alt="profileimage" />
          <div className='MessageBodyDetails' >
            <h3>thismy_id</h3>
            <p>Good morning ..!</p>
          </div>
       </div>
       {/* <div className='NoMessageLabel'>
          <h1>Nothing to see here - yet</h1>
          <p>when some one mentioned you , you will find it here</p>
       </div> */}
      </div>
  )
}

export default VerifiedNotification
