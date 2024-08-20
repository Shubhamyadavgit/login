import React, { useState } from 'react'
import "./ForgetPassword.css"
import email_icon from "../Assets/email.png"
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
 const[email,setEmail]=useState("");
 const[error,setError]=useState({email:""});
 const validateEmail = (value) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError(prevErrors => ({ ...prevErrors, email: "" }));
        return true;
    } else {
        setError(prevErrors => ({ ...prevErrors, email: "Invalid Email" }));
        return false;
    }
};
const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
};
  return (
    <div className="container">
        <div className='header'>
            <div className='text'>Forget Password</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' value={email} onChange={handleEmailChange} placeholder='Enter Email'/>
                    {error.email && <div className="error">{error.email}</div>}
            </div>
        </div>
        <div className='submit-container'>
            <div className='submit'>Submit</div>
            <Link to="/" className="back">Back</Link>
        </div>
    </div>
  );
};

export default ForgetPassword