import './App.css';
// import { useState } from 'react';
import { Routes, Route, useNavigate} from "react-router-dom";
import Nav from './Pages/Nav';
import Home from './Pages/Home';
// import Communities from '../src/Pages/Communities';
// import Profile from '../src/Pages/Profile';
// import Login from '../src/Authentication/Login';
// import ForgetPassword from '../src/Authentication/ForgetPassword';
// import OTP from '../src/Authentication/OTP'
// import SignUp from '../src/Authentication/SignUp';
// import NewPassword from './Authentication/NewPassword';
// import Explore from './Pages/Explore';
// import Trendings from '../src/Componants/Trendings'
import Sports from '../src/Componants/Sports'
import News from '../src/Componants/News'
import Entertaiment from '../src/Componants/Entertaiment'
// import Post from './Componants/Post';
// import Notification from './Pages/Notification';
// import AllNotifications from './Componants/AllNotifications';
// import VerifiedNotification from './Componants/VerifiedNotification';
// import MentionNotification from './Componants/MentionNotification';
// import Message from './Pages/Message';
import Premium from './Pages/Premium';
// import Communities from './Pages/Communities';
// import Animals from './Componants/ComunitiesPages/Animals'
// import Gaming from './Componants/ComunitiesPages/Gaming'
// import Art from './Componants/ComunitiesPages/Art'
// import Food from './Componants/ComunitiesPages/Food'
// import Travel from './Componants/ComunitiesPages/Travel'
// import Politics from './Componants/ComunitiesPages/Politics'
// import Tech from './Componants/ComunitiesPages/Technology'
// import Xofficial from './Componants/ComunitiesPages/Xofficial'




function App() {
  // const navigate = useNavigate();
  // const [userDetails, setUserDetails] = useState([
  //   {
  //     id:1,
  //     username:"satheesh2705",
  //     mailid:"mrsatheesh2705@gmail.com",
  //     password:"Mrsatheesh3@#$"
  //   }
  // ]);

  
  // const [newUserName, setNewUserName] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [newMailId, setNewMailId] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [checkUserName, setCheckUserName] = useState('');
  // const [checkUserPassword, setCheckUserPassword] = useState('');
  // const [checkUserMailId, setCheckUserMailId] = useState('');
  // const [checkUserOTP, setCheckUserOTP] = useState('');
  // const [otpCopy, setOtpCopy] = useState('');
  // const [takeUserId, setTakeUserId] = useState('');

    // ====================

    // let Upper   = 0;
    // let Lower   = 0;
    // let Special = 0;
    // let Numbers = 0;

  // const analysisUserValue = (Value) => {
 
  //    Upper   = 0;
  //    Lower   = 0;
  //    Special = 0;
  //    Numbers = 0;
   
  //   for(let i = 0; i<= Value.length-1; i++){
      
  //     if((Value[i] >='A') && (Value[i] <='Z')){
  //         Upper++;
  //     }
  //     else if((Value[i] >='a') && (Value[i] <='z')){
  //         Lower++;
  //     }
  //     else if((Value[i] >= 0) && (Value[i] <= 9)){
  //         Numbers++;
  //     }
  //     else{
  //         Special++;
  //       }
  //   }

  //   return [Upper, Lower, Special, Numbers]
    
  // }
    //  signUp validation
    //  ======================

  // const handleSignUp = (e) => {
  //   console.log("sign up");
  //   e.preventDefault();
  //   let userNameFlag = false;
  //   let mailIdFlag     = false;
  //   let passwordFlag = false;
  //   let newUserFlag = false;

  //   //  user name checking 
  //   [Upper, Lower, Special, Numbers] = analysisUserValue(newUserName);
  //   console.log("the count is: "+Upper, Lower, Special, Numbers);
  //   if((newUserName.length>6 && newUserName.length<16) && (Upper == 0 && Lower >= 1 && Numbers >= 1 && Special == 0)){
  //       userNameFlag=true;
  //   }
  //   else{
  //     userNameFlag = false;
  //     alert("Invalid UserName ")
  //   }
    
  //   // email validation 
    
  //   [Upper, Lower, Special, Numbers] = analysisUserValue(newMailId);

  //   if((Upper==0 && Lower>=1 && Numbers>=1 && Special>=1) && (newMailId.length >= 8 && newMailId.length <= 22)){
  //       mailIdFlag = true ;        
  //   }
  //   else{
  //       alert("Please Enter Valid Email")
  //       mailIdFlag = false ; 
  //   }

  //   // strong passwordchecking

  //   [Upper, Lower, Special, Numbers] = analysisUserValue(newPassword);


  //   if( (Upper>=1 && Lower>=1 && Numbers>=1 && Special>=1) && (newPassword.length >= 8 && newPassword.length <= 16 ) &&
  //       (newPassword === confirmPassword) ){
  //       passwordFlag = true ; 
  //      }
  //   else{
  //       alert("Please Valid Password")
  //       passwordFlag = false ; 
  //     }

  //     userDetails.map((userDetail) => {
  //           if(userDetail.username == newUserName || userDetail.mailid == newMailId){
  //               newUserFlag = false ;
  //               alert("UserName or MailId Already Exist");
  //           }
  //           else{
  //               newUserFlag = true ;
  //           }
  //       }
  //     )
       
  //     if(userNameFlag == true && passwordFlag==true && mailIdFlag == true && newUserFlag == true){
  //       const id =  userDetails.length ? userDetails[userDetails.length-1].id+1:1;
  //       const NewUserDetails = {id,username:newUserName,mailid:newMailId, password:newPassword}
  //       const AllUserDetails = [...userDetails, NewUserDetails]
  //       setUserDetails(AllUserDetails);
  //       setNewUserName('');
  //       setNewMailId('');
  //       setNewPassword('');
  //       setConfirmPassword('');
  //       alert("SignUp succesfully ")
  //       console.log(userDetails);
  //       navigate('/');
  //     }
  //     else{
  //       alert("SignUp Failed ")
  //     }
   
  //     // signUp end
  //  }

   //  ======================
   //  login validation
   //  ======================

  // const handleLogin = (e) =>{
  //   e.preventDefault();
  //   // Code for successful login
  //   userDetails.map((userDetail) => {
  //     if((checkUserName===userDetail.username || checkUserName===userDetail.mailid) && checkUserPassword===userDetail.password){    
  //         setCheckUserName('')
  //         setCheckUserPassword('')
  //         alert("Login succesfully")
  //         navigate('nav')
  //     }
  //     else{
  //       document.getElementById("InCorrectPass").style.display="Enter Valid Password or UserName"
  //       alert("Please enter a valid user name & Password")
  //     }
  //   })
  // }

   // ====================
   //  forget password  validation
   //  ======================

  //  const handleGetOtp = (e, generatedOTP) =>{
  //   e.preventDefault();
    
  //   userDetails.map((userDetail) =>{
  //     if ( userDetail.mailid === checkUserMailId) {
  //       generatedOTP = Math.floor(Math.random()*999999) 
  //       setOtpCopy(generatedOTP)
  //       setTakeUserId(userDetail.id)
  //       navigate('otp');
  //       alert("Your otp is"+generatedOTP)
  //       return generatedOTP;
  //       // return forgetPasswordPersonId;
  //       setCheckUserMailId('')
  //     }
  //     else{
  //       alert("Please Enter Valid Email Address")
  //     }
  //    })
  //  }

  //   const handleCheckOtp = (e) =>{
      
  //     e.preventDefault()
  //     if(otpCopy == checkUserOTP){
  //       navigate("setpassword")
  //       alert("Otp verification succes")
  //     }
  //     else{
  //       alert("Please Enter Correct OTP")
  //     }
  //   }

  //   const handleNewPassWord = (e) =>{
  //     e.preventDefault()
  //     if(newPassword === confirmPassword){
  //       userDetails.map((userDetail) =>{
  //         if(userDetail.id === takeUserId){
  //           userDetail.password =  newPassword
  //           alert("Password changed succesfully")
  //           navigate('/')
  //         }
  //       })
  //     }
  //     else{
  //       alert("Please Enter Same Password")
  //     }
  //   }

  //   function checkpass() {
  //       userDetails.map((ud) =>{
  //         console.log(ud.password);
  //         alert(" "+ud.password)
  //       }

  //       )
  //   }

    // checkpass() Mrblack3@#$
  

  return (
    <div className="App">


      <Routes>  
         {/* 
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
           }/> */}

          {/* <Route path='otp' element={
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
           }/>  */}
        

          
          <Route path='/' element={ <Nav /> }>
          {/* <Route index element={<Home />} />
          <Route path='home' element={<Home />} /> */}
          {/* <Route path='message' element={<Message />} />  */}
          {/* <Route  path='communities'   element={<Communities/>} >
            <Route path='animals'   element={<Animals />}/>
            <Route path='art'      element={<Art />}/>
            <Route path='food'     element={<Food />}/>
            <Route path='politics' element={<Politics />}/>
            <Route path='tech' element={<Tech />}/>
            <Route path='games'     element={<Gaming />}/>
            <Route path='travel'     element={<Travel />}/>
            <Route path='xofficial'  element={<Xofficial />}/>
          </Route>   */}
          <Route index element={<Premium />}/>
          {/* <Route path='explore' element={ <Explore /> } >
            <Route index element={<Post />}/>
            <Route path='foryou' element={<Post />}/>
            <Route path='trendings' element={<Trendings />}/>
            <Route path='news' element={<News />}/>
            <Route path='sports' element={<Sports />}/>
            <Route path='entertainments' element={<Entertaiment />}/>
          </Route>
          <Route path='notification' element={ <Notification /> } >
             <Route index element={<AllNotifications />}/>
             <Route path='allnotification' element={<AllNotifications />}/>
             <Route path='mentionnotification' element={<MentionNotification />}/>
             <Route path='verifiednotification' element={<VerifiedNotification />}/>
           </Route>
            <Route path='profile' element={<Profile />} />
            <Route path='communities' element={<Communities />} /> 
           
             */}
           </Route>
          
      </Routes>
        
    </div>
  );
}

export default App;


