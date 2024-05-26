import './App.css';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Communities from '../src/Pages/Communities';
import Profile from '../src/Pages/Profile';
import Login from '../src/Authentication/Login';
import ForgetPassword from '../src/Authentication/ForgetPassword';
import OTP from '../src/Authentication/OTP'
import { Routes, Route, useNavigate} from "react-router-dom";
import SignUp from '../src/Authentication/SignUp';
import { useState } from 'react';
import NewPassword from './Authentication/NewPassword';

function App() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([
    {
      id:1,
      username:"satheesh2705",
      mailid:"mrsatheesh2705@gmail.com",
      password:"Mrsatheesh3@#$"
    }
  ]);

  
  const [newUserName, setNewUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newMailId, setNewMailId] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkUserName, setCheckUserName] = useState('');
  const [checkUserPassword, setCheckUserPassword] = useState('');
  const [checkUserMailId, setCheckUserMailId] = useState('');
  const [checkUserOTP, setCheckUserOTP] = useState('');
  const [otpCopy, setOtpCopy] = useState('');
  const [takeUserId, setTakeUserId] = useState('');

    // ====================
    //  signUp validation
    //  ======================
  const handleSignUp = (e) => {
    console.log(userDetails);
    e.preventDefault();
    let userNameFlag = false;
    let mailIdFlag     = false;
    let passwordFlag = false;
    let mailUpper   = 0;
    let mailLower   = 0;
    let mailSpecial = 0;
    let mailNumber  = 0;
    let passwordUpper   = 0;
    let passwordLower   = 0;
    let passwordSpecial = 0;
    let passwordNumber  = 0;

    //  user name checking 
    if((newUserName.length>6) && (newUserName.length<16)){
        userNameFlag=true;
    }
    else{
      userNameFlag = false;
      alert("Enter valid User Name ")
    }
    
    // email validation 

    for(let i = 0; i<=newMailId.length; i++){
      if((newMailId[i] >='A') && (newMailId[i] <='Z')){
          mailUpper++;
      }
      else if((newMailId[i] >='a') && (newMailId[i] <='z')){
          mailLower++;
      }
      else if((newMailId[i] >= 0) && (newMailId[i] <= 9)){
          mailNumber++;
      }
      else{
          mailSpecial++;
      }
    }
    if(mailUpper==0 && mailLower>=1 &&mailNumber>=1 && mailSpecial>=1){
        mailIdFlag = true ;        
    }
    else{
        alert("Please Enter Valid Email")
        mailIdFlag = false ; 
    }

    // strong passwordchecking

    for(let i = 0; i<=newPassword.length; i++){
      if((newPassword[i] >='A') && (newPassword[i] <='Z')){
          passwordUpper++;
      }
      else if((newPassword[i] >='a') && (newPassword[i] <='z')){
          passwordLower++;
      }
      else if((newPassword[i] >= 0) && (newPassword[i] <= 9)){
          passwordNumber++;
      }
      else{
          passwordSpecial++;
      }

    }

    if( (passwordUpper>=1 && passwordLower>=1 && passwordNumber>=1 && passwordSpecial>=1) &&
        (newPassword === confirmPassword) ){
        passwordFlag = true ; 
       }
    else{
        alert("Please Valid Password")
        passwordFlag = false ; 
      }
       
      if(userNameFlag == true && passwordFlag==true && mailIdFlag == true ){
        const id =  userDetails.length ? userDetails[userDetails.length-1].id+1:1;
        const NewUserDetails = {id,username:newUserName,mailid:newMailId, password:newPassword}
        const AllUserDetails = [...userDetails, NewUserDetails]
        setUserDetails(AllUserDetails);
        setNewUserName('');
        setNewMailId('');
        setNewPassword('');
        setConfirmPassword('');
        alert("SignUp succesfully ")
        console.log(userDetails);
        navigate('/');
      }
      else{
        alert("SignUp Failed ")
      }
   
      // signUp end
   }

   //  ======================
   //  login validation
   //  ======================

  const handleLogin = (e) =>{
    e.preventDefault();
    // Code for successful login
    userDetails.map((userDetail) => {
      if((checkUserName===userDetail.username || checkUserName===userDetail.mailid) && checkUserPassword===userDetail.password){    
          setCheckUserName('')
          setCheckUserPassword('')
          alert("Login succesfully")
          navigate('nav')
      }
      else{
        document.getElementById("InCorrectPass").style.display="Enter Valid Password or UserName"
        alert("Please enter a valid user name & Password")
      }
    })
  }

   // ====================
   //  forget password  validation
   //  ======================

   const handleGetOtp = (e, generatedOTP) =>{
    e.preventDefault();
    
    userDetails.map((userDetail) =>{
      if ( userDetail.mailid === checkUserMailId) {
        generatedOTP = Math.floor(Math.random()*999999) 
        setOtpCopy(generatedOTP)
        setTakeUserId(userDetail.id)
        navigate('otp');
        alert("Your otp is"+generatedOTP)
        return generatedOTP;
        // return forgetPasswordPersonId;
        setCheckUserMailId('')
      }
      else{
        alert("Please Enter Valid Email Address")
      }
     })
   }

    const handleCheckOtp = (e) =>{
      
      e.preventDefault()
      if(otpCopy == checkUserOTP){
        navigate("setpassword")
        alert("Otp verification succes")
      }
      else{
        alert("Please Enter Correct OTP")
      }
    }

    const handleNewPassWord = (e) =>{
      e.preventDefault()
      if(newPassword === confirmPassword){
        userDetails.map((userDetail) =>{
          if(userDetail.id === takeUserId){
            userDetail.password =  newPassword
            alert("Password changed succesfully")
            navigate('/')
          }
        })
      }
      else{
        alert("Please Enter Same Password")
      }
    }

    function checkpass() {
        userDetails.map((ud) =>{
          console.log(ud.password);
          alert(" "+ud.password)
        }

        )
    }

    // checkpass()
  

  return (
    <div className="App">


      <Routes>  
        
          <Route path='/' element={ 
            <Login 
              checkUserName={checkUserName}
              setCheckUserName={setCheckUserName}
              checkUserPassword={checkUserPassword}
              setCheckUserPassword={setCheckUserPassword}
              handleLogin={handleLogin}
            />
           }/>

          <Route path='signup' element={
            <SignUp 
              newUserName={newUserName}
              setNewUserName={setNewUserName}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              newMailId={newMailId} 
              setNewMailId={setNewMailId}
              handleSignUp={handleSignUp}
            />
           }/> 

          <Route path='forgetpassword' element={ 
            <ForgetPassword 
            handleGetOtp={handleGetOtp}
            checkUserMailId={checkUserMailId}
            setCheckUserMailId={setCheckUserMailId}
            />
           }/>

          <Route path='otp' element={
            <OTP 
            checkUserOTP={checkUserOTP}
            setCheckUserOTP={ setCheckUserOTP}
            handleCheckOtp={handleCheckOtp}
            />
          }/>

          <Route path='setpassword' element={
              <NewPassword 
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              handleNewPassWord={handleNewPassWord}
            />
           }/>

          <Route path='nav' element={ <Nav /> }>
            <Route path='home' element={ <Home /> } />
            <Route path='profile' element={<Profile />} />
          </Route>
          
       

      </Routes>
        
    </div>
  );
}

export default App;



