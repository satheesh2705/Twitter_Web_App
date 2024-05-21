import React from 'react'
import '../css/Authentication.css'

const OTP = () => {
  return (
    <div className='OTP'>
     <div className="otp-container">
      <form  className="otp-form">
        <h1 className="otp-title">Enter OTP</h1>
        <input
          type="text"
          className="otp-input"
          maxLength="6"
          placeholder="Enter your OTP"
        />
        <button type="submit" className="otp-submit">Submit</button>
        <div className="otp-footer">
        <p>Press Wrong number ?</p>
        <p>Go Back</p>
      </div>  
      </form>
      
    </div>
    </div>
  )
}

export default OTP
