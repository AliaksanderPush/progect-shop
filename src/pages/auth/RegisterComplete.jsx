import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import {toast } from 'react-toastify';
import './Register.css';

const RegisterComplete = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

 const handleSubmit = async (e) => {
   e.preventDefault();
   
 }

 const handleChange = (e) => {
   setPassword(e.target.value);
  
 }

  const completeRegistrationForm = () => <form onSubmit={handleSubmit} >
    <input type="email"
      className="form-control mb-3"
      value={email}
      disabled
     />
	 <input type="password"
      className="form-control"
      value={password}
      onChange={handleChange}
     />
     <button type="submit" className="btn btn-raised _btn" >RegisterComplete</button>
  </form>

  useEffect(()=>{
   setEmail(localStorage.getItem('emailForRegistartion'));
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {completeRegistrationForm()}
        </div>
       </div>
     </div>
  );
};

export default RegisterComplete;
