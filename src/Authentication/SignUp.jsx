import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Authentication.css'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { TbBrandGithub } from "react-icons/tb";

const SignUp = () => {
  return (
    <div className='SignUp'>
      <div className='topStartCircle'>
      </div>
      <div className='bottomEndCircle'>
      </div>
      <div className='SignUpPage'>
          <div className='SignUpLabes'>
            <h1>Roll The Corpet..!</h1>
            <p>Skip the lag ?</p>
          </div>
          <div className='SignUpBox'>
            <div className='SignUpHeader'>
            <h2>Sign Up</h2>
              <p>Just some details to get you in .!</p>
            </div>
            <form className='SignUpForm'>
              <input type="text" placeholder=' UserName'  id='UN' />
              <input type="email" placeholder=' Email / Phone ' id='MID'/>
              <input type="password" placeholder='Password' id='PW' />
              <input type="password" placeholder='Confirm Password' id='CPW' />
              <button type='submit'>SignUp</button>
              <p id='ValidDetail'>Enter Valid Details...</p>
            </form>
            <div className='SignUpFooter'>
                <div className='SignUpFooterTop'>
                  <div>
                    <p></p>
                    <p>OR</p>
                    <p></p>
                  </div>
                  <div>
                    <ImFacebook2 id='FaceBookIcon'/>
                    <FcGoogle  id='GoogleIcon'/>
                    <TbBrandGithub  id='GitIcon'/>
               
                  </div>
                </div>
                <div className='SignUpFooterBottom'>
                  <div>
                    <p>Already have an account ?</p>
                    <Link to='/'> <p>Login</p></Link>
                  </div>
                  <div>
                      <p>Terms & Condition</p>
                      <p>Support</p>
                      <p>CustomerCare</p>
                  </div>
                </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default SignUp
