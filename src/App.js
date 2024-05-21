import './App.css';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Communities from '../src/Pages/Communities';
import Profile from '../src/Pages/Profile';
import { Routes, Route} from "react-router-dom";
import Login from '../src/Authentication/Login';
import SignUp from '../src/Authentication/SignUp';
import ForgetPassword from '../src/Authentication/ForgetPassword';
import OTP from '../src/Authentication/OTP'

function App() {
  return (
    <div className="App">

        <Nav />
        <Routes>

           {/* <Route path='/' element={<Login />}/>
           <Route path='signup' element={<SignUp />}/>
           <Route path='forgetpass' element={<ForgetPassword />} />
           <Route path='/forgetpass/nsignup' element={<SignUp />}/> */}
           
          <Route path='/home' element={<Home />}/>
            {/* <Route path='comm' element={<Communities />}/> */}
           <Route path='pro' element={<Profile />}/>  

       </Routes>
    </div>
  );
}

export default App;
