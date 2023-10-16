import React from 'react'
import "./MailList.css"
const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">save time , save money</h1>
        <span className="mailDesc">sign up and we'll send best deal to you</span>
        <div className="mailInputContainer">
            <input type='text' placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
