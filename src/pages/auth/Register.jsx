import React, { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState('');

 const handleSubmit = () => {
  //
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
     <button type="submit" className="btn btn-raised" >Submit</button>
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
