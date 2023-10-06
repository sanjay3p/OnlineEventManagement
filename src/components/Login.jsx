import React, { useState } from 'react'
import './Login.css'
import { Header } from './Header';

import person from './assets/person.png'
import password from './assets/password.png'
import email from './assets/email.png'

const Login = () => {
    const[act, setAction] = useState("Login")
  return (
    <>
     <Header />
     <div className='Con'>
     <div className='container'>
        <div className="header">
            <div className="text">{act}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {act==="Login"?<div></div>:
            <div className="input">
                <img src={person} alt="user" />
                <input type="text" placeholder='Name'/>
            </div>}           
            <div className="input">
                <img src={email} alt="email" />
                <input type="email" placeholder='Email Id' />
            </div>
            {act==="Login"?
            <div className="input">
            <img src={password} alt="password" />
            <input type="password" placeholder='Password'/>
            </div>:
            <>
            <div className='input'>
            <img src={password} alt="password" />
            <input type="password" placeholder='Create Password'/>
            </div>
            <div className='input'>
            <img src={password} alt="password" />
            <input type="password" placeholder='Confirm Password'/>
            </div>
            </>}  
        </div>
        {act==="Sign Up"?<div></div>:
         <div className="forgot-password">Forgot Password? <span>Click here!</span></div>}
        <div className="sub-container">
            <div className={act==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={act==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
     </div>
     </div>
    </>
  )
}
export default Login;