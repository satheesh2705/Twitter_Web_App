import React from 'react'
import '../css/message.css';
import { IoMdAdd } from "react-icons/io";

const Message = () => {

  return (
    <div className='Message'>
        <div className='CreateGroupBox'>
          <h1>Select a Message</h1>
          <p>Choose from your existing conversation, start a new one, or just keep swimming</p>
          <div className='CreateGroup'>
            <button>Create Group</button>
            <IoMdAdd id='CreateGroupIcon' />
          </div>
        </div>
        {/* <div className='CreateGroupContainer'>
          <form className='CreateGroupForm'>
              <div>
                <input type="text" placeholder='Group Name'/>
                <input type="text" placeholder='Search your buddies'/>
              </div>
              <button>
                  Done
              </button>
          </form>
          <div>
            <h1>hi hello</h1>
            <h1>hi hello</h1>
            <h1>hi hello</h1> 
          </div>
        </div> */}
    </div>
  )
}

export default Message
