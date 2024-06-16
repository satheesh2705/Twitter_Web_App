import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { IoSettingsSharp } from "react-icons/io5";


const Notification = () => {
  return (
    <div className='Notification'>
        <div className='NotificationHeader'>
          <h1>Notification</h1>
          <span><IoSettingsSharp /></span>
        </div>
        <div className='NotificationType'>
          <NavLink id='NotificationNavLink' to='allnotification'>    <p>AllNotification</p>  </NavLink>
          <NavLink id='NotificationNavLink' to='mentionnotification'> <p>MentionNotification</p></NavLink>
         <NavLink  id='NotificationNavLink' to='verifiednotification'>  <p>VerifiedNotification</p></NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Notification
