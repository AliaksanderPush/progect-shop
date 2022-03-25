import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import { ToastContainer } from 'react-toastify';
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
    <Header/>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/complete" element={<RegisterComplete/>} />
      </Routes> 
    </>
    
  );
};

export default App;
