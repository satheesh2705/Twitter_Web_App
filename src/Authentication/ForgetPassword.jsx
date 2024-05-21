import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Authentication.css'

const ForgetPassword = () => {
  return (
    <div className='ForgetPassword'>

      <div className='ForgetbottomEndCircle'>
      </div>
      <div className='ForgetPasswordLabel'>
          <h1>No Worries..!!</h1>
          <p>Take to back..! </p>
      </div>
      <div className="ForgetPasswordBox">
        <form className='ForgetPasswordForm' >
            <div>
              <h2>Forget Password ?</h2>
              <p>Enter Your Email</p>
            </div>
            <input type="email" placeholder='example@gmail.com' />
            <div>
            <button>Get OTP</button>
            </div>
            </form>
        <div className='ForgetPassWordFooter'>
        <div>
                    <p>Don't have an account ?</p>
                    <Link to='nsignup'> <p>SignUp</p></Link>
                  </div>
                  <div>
                      <p>Terms & Condition</p>
                      <p>Support</p>
                      <p>CustomerCare</p>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
