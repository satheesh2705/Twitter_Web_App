import React from 'react'
import '../css/Authentication.css'
import { FaFreeCodeCamp } from "react-icons/fa";
// import { Link } from 'react-router-dom';
const OTP = ({ setCheckUserOTP,  checkUserOTP, handleCheckOtp}) => {
  return (
    <div className='OTP'>
     <div className="otp-label">
        <h1> Keep Secure  .<FaFreeCodeCamp />..</h1>
     </div>
     <div className="otp-container">
      <form  className="otp-form" onSubmit={handleCheckOtp}>
        <h2 className="otp-title">
          We have sent to OTP your Mail ID
        </h2>
        <input
          type="text"
          className="otp-input"
          maxLength="6"
          placeholder="Enter Your Source "
          value={checkUserOTP}
          onChange={e =>  setCheckUserOTP(e.target.value)}
        />
        <button type="submit" className="otp-submit">Submit</button>
        <div className="otp-footer">
        <p>Press Wrong number ?</p>
        
        {/* <Link to='login' className='link'> <p>Go Back</p></Link> */}

      </div>  
      </form>
      
    </div>
    </div>
  )
}

export default OTP
