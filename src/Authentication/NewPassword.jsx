import React from 'react'
import '../css/Authentication.css'
const NewPassword = ({newPassword, setNewPassword, confirmPassword, setConfirmPassword, handleNewPassWord}) => {
  return (
    <div className='NewPassword' >
        <div className='paswordRound'>

        </div>
        <div className='NewPasswordLabel'>
            <h1>Don't Forgot Once Again...</h1>
        </div>
    <div class="container">
        <h2>Reset Your Password</h2>
        <form onSubmit={handleNewPassWord}> 

            <div class="input-group">
               
            <input 
                type="password" 
                id="New-password" 
                placeholder='new-password' 
                required
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}

             />
            </div>
            <div class="input-group">
                
                <input 
                type="password" 
                id="confirm-password" 
                required
                placeholder='confirm-password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}    
            />
            </div>
            <button id='setPasswordButton' type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default NewPassword
