import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Authentication.css'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { TbBrandGithub } from "react-icons/tb";

const Login = () => {
  return (
      <div className="Login">
  
          <div id='firstRound'>
        
        </div>
        
        <div className='LoginLabel'>
          <h1> Welcome Back.!</h1>
          <p>Skip the lag ? </p>
        </div>
        <div className='LoginForm'>
          <div className='LoginFormHead'>
            <h2>Login</h2>
            <p>Glad You're Back..!</p>
          </div>
          <form className='LoginDetails'>
            <input 
            type="text" 
            placeholder='UserName'
            id='UserName'
            required
            />
            <input 
            type="password" 
            placeholder='Password' 
            id='Password'
            required
            />
            <div className='PasswordRem'>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p id='InCorrectPass'>Enter Password or UserName</p>
            <Link to='nav'><button>Login</button></Link>
           <Link to='forgetpass'> <p id='ForgetPassword'>Forget Password ?</p></Link>
          </form>
          <div className='LoginFooter'>
              <div className="LoginFooterTop">
                  <div>
                    <p></p>
                    <p>OR</p>
                    <p></p>
                  </div>
                  <div>
                    <ImFacebook2  id='FaceBookIcon'/>
                    <FcGoogle  id='GoogleIcon'/>
                    <TbBrandGithub  id='GitIcon'/>
                    
                  </div>
              </div>
              <div className="LoginFooterBottom">
                  <p>Don't have an account ?</p>
                  <Link to='signup'><p>Sign Up</p> </Link>
                </div>
          </div>
      </div> 
      </div>
  )
}

export default Login



              