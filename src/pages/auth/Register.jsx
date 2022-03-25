import React, { useState } from "react";
import { auth } from "../../firebase";
import {toast } from 'react-toastify';
import './Register.css';

const Register = () => {

  const [email, setEmail] = useState('');

 const handleSubmit = async (e) => {
   e.preventDefault();
   const config = {
     url: 'http://localhost:3000/register/complete',
     handleCodeInApp:true
   }

   await auth.sendSignInLinkToEmail(email, config);
   toast.success(`Email is sent to ${email}.Click the link to complete your registration`);
   localStorage.setItem('emailForRegistartion', email);
   setEmail('')
 }

 const handleChange = (e) => {
   setEmail(e.target.value);
  
 }

  const registerForm = () => <form onSubmit={handleSubmit} >
    <input type="email"
      className="form-control"
      value={email}
      onChange ={handleChange}
      autoFocus
     />
     <button type="submit" className="btn btn-raised _btn" >Submit</button>
  </form>
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
       </div>
     </div>
  );
};

export default Register;
